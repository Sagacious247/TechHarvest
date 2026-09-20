import { ContextBuilder } from "./ContextBuilder";
import { PromptEngine } from "./PromptEngine";
import { KnowledgeChunk } from "../models/KnowledgeChunk";

export class ReasoningEngine {

    private contextBuilder =
        new ContextBuilder();

    private promptEngine =
        new PromptEngine();

    prepare(

        systemPrompt: string,

        question: string,

        chunks: KnowledgeChunk[],

        conversationHistory: string[] = []

    ): string {

        const context =
            this.contextBuilder.build({

                question,

                chunks,

                conversationHistory,

            });

        return this.promptEngine.build(

            context,

            {

                systemRole: systemPrompt,

            }

        );

    }

}