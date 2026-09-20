import OpenAI from "openai";
import { AIConfig } from "../config/AIConfig";

export class OpenAIService {

  private client: OpenAI | null = null;

  getClient(): OpenAI {

    if (!this.client) {

      if (!AIConfig.openAI.apiKey) {
        throw new Error(
          "OPENAI_API_KEY is not configured."
        );
      }

      this.client = new OpenAI({
        apiKey: AIConfig.openAI.apiKey,
      });

    }

    return this.client;

  }

}