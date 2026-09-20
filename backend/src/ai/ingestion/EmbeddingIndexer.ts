import { EmbeddingService } from "../services/EmbeddingService";

export class EmbeddingIndexer {

  private embeddingService =
    new EmbeddingService();

  async createEmbedding(

    text: string

  ) {

    return this.embeddingService.createEmbedding(

      text

    );

  }

}