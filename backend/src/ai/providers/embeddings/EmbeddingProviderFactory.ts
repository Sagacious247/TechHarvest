import env from "../../../config/env";

import { BaseEmbeddingProvider } from "./BaseEmbeddingProvider";
import { OpenAIEmbeddingProvider } from "./OpenAIEmbeddingProvider";
import { GeminiEmbeddingProvider } from "./GeminiEmbeddingProvider";

export class EmbeddingProviderFactory {

  static create(): BaseEmbeddingProvider {

    switch (env.AI_PROVIDER.toLowerCase()) {

      case "gemini":
        return new GeminiEmbeddingProvider();

      case "openai":
        return new OpenAIEmbeddingProvider();

      default:
        throw new Error(
          `Unsupported embedding provider: ${env.AI_PROVIDER}`
        );

    }

  }

}