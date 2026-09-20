export interface PromptContext {

    question: string;

    knowledge: string[];

    conversationHistory?: string[];

    metadata?: Record<string, unknown>;

}

export interface PromptOptions {

    systemRole?: string;

    temperature?: number;

}

export class PromptEngine {

    build(

        context: PromptContext,

        options?: PromptOptions

    ): string {

        const systemRole =
            options?.systemRole ??
            "You are TechHarvest AI, an intelligent AI assistant that answers questions ONLY from the supplied knowledge base.";

        const history =
            context.conversationHistory?.join("\n") ?? "";

        const knowledge =
            context.knowledge.join("\n\n");

        return `

${systemRole}

==================================================
KNOWLEDGE
==================================================

${knowledge}

==================================================
CONVERSATION
==================================================

${history}

==================================================
QUESTION
==================================================

${context.question}

==================================================
RULES
==================================================

1. Answer ONLY using the supplied knowledge.

2. Never invent information.

3. If the answer is not contained in the knowledge, reply:

"I couldn't find that information in the current TechHarvest knowledge base."

4. Keep the answer professional.

5. Use bullet points whenever appropriate.

==================================================
ANSWER
==================================================

`;

    }

}