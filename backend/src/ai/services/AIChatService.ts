import { RetrievalService } from "./RetrievalService";
import { ReasoningEngine } from "./ReasoningEngine";
import { GeminiService } from "./GeminiService";
import { ConversationService } from "./ConversationService";
import { GeminiConversationFormatter } from "../formatters/GeminiConversationFormatter";
import { CitationFormatter } from "../citations/CitationFormatter";

import {
  IntentEngine,
  AIIntent,
} from "../../automation/intelligence/IntentEngine";

import { AutomationService }
  from "../../automation/services/AutomationService";

import { WorkflowType }
  from "../../automation/workflow/WorkflowTypes";

export class AIChatService {

  private retrievalService =
    new RetrievalService();

  private reasoningEngine =
    new ReasoningEngine();

  private geminiService =
    new GeminiService();

  private conversations =
    new ConversationService();

    private intents =
  new IntentEngine();

private automation =
  new AutomationService();

  async chat(

    tenantId: string,

    userId: string,

    sessionId: string,

    question: string

  ) {

    //
    // Save user's message
    //
    await this.conversations.saveUserMessage(
      sessionId,
      question
    );

    //
    // Load previous messages
    //
    const history =
      await this.conversations.getConversation(
        sessionId
      );

    //
    // Format conversation for Gemini
    //
    const conversationHistory =
      GeminiConversationFormatter.toPromptHistory(
        history
      );

    //
    // Retrieve knowledge
    //
    const chunks =
      await this.retrievalService.retrieve(
        tenantId,
        question
      );

    //
    // Build citations (not yet stored)
    //
    const citations =
      CitationFormatter.build(chunks);

    console.log(
      "🔎 Retrieved knowledge:",
      chunks.map(chunk => ({
        documentId: chunk.documentId,
        chunkIndex: chunk.chunkIndex,
        content: chunk.content.slice(0, 200),
      }))
    );

    //
    // Build prompt
    //
    const systemPrompt = `
You are TechHarvest AI.

Answer ONLY using the supplied knowledge.

Use previous conversation when helpful.

If the answer is not found, say:

"I couldn't find that information in the current TechHarvest knowledge base."

Never invent information.

Never mention vectors, embeddings or internal implementation.
`;

    const prompt =
      await this.reasoningEngine.prepare(

        systemPrompt,

        question,

        chunks,

        conversationHistory

      );

    //
    // Ask Gemini
    //
    const answer =
      await this.geminiService.generate(
        prompt
      );

      const intent =
  this.intents.detect(question);

switch (intent) {

  case AIIntent.REGISTER:

    await this.automation.execute({

      workflow:
        WorkflowType.AI_REGISTER_REQUEST,

      payload: {

        tenantId,

        userId,

        sessionId,

        question,

      },

    });

    break;

  case AIIntent.PAYMENT:

    await this.automation.execute({

      workflow:
        WorkflowType.AI_PAYMENT_REQUEST,

      payload: {

        tenantId,

        userId,

        sessionId,

      },

    });

    break;

}

    //
    // Save AI response
    //
    await this.conversations.saveAssistantMessage(

      sessionId,

      answer

    );

    //
    // Return answer + citations to frontend
    //
    return {

      answer,

      citations,

    };

  }

}