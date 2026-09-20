import { KnowledgeChunk } from "../models/KnowledgeChunk";

export interface AIContext {

    question: string;

    chunks: KnowledgeChunk[];

    conversationHistory?: string[];

    metadata?: Record<string, unknown>;

}

export class ContextBuilder {

  build(context: AIContext) {

    const formattedKnowledge =
        context.chunks.map((chunk, index) =>

            `Knowledge ${index + 1}

${chunk.content}`

        );

    return {

        question: context.question,

        knowledge: formattedKnowledge,

        conversationHistory:
            context.conversationHistory ?? [],

        metadata: {

            retrievedChunks:
                formattedKnowledge.length,

            generatedAt:
                new Date().toISOString(),

            ...(context.metadata ?? {}),

        },

    };

}

}