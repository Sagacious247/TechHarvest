import { EmbeddingProviderFactory } from "../providers/embeddings/EmbeddingProviderFactory";
import { BaseEmbeddingProvider } from "../providers/embeddings/BaseEmbeddingProvider";

export class EmbeddingService {

  private provider: BaseEmbeddingProvider;

  constructor() {

    this.provider =
      EmbeddingProviderFactory.create();

  }

  async createEmbedding(
    text: string
  ): Promise<number[]> {

    return this.provider.createEmbedding(text);

  }

}