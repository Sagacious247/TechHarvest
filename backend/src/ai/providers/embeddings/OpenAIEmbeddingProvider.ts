import OpenAI from "openai";

import env from "../../../config/env";

import { BaseEmbeddingProvider } from "./BaseEmbeddingProvider";

export class OpenAIEmbeddingProvider extends BaseEmbeddingProvider {

  private client: OpenAI | null = null;

  private getClient(): OpenAI {

    if (!this.client) {

      if (!env.OPENAI_API_KEY) {
        throw new Error(
          "OPENAI_API_KEY is not configured."
        );
      }

      this.client = new OpenAI({
        apiKey: env.OPENAI_API_KEY,
      });

    }

    return this.client;

  }

  async createEmbedding(
    text: string
  ): Promise<number[]> {

    const response =
      await this.getClient().embeddings.create({

        model:
          env.OPENAI_EMBEDDING_MODEL,

        input: text,

      });

    return response.data[0].embedding;

  }

}