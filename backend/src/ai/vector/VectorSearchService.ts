import { EmbeddingService } from "../services/EmbeddingService";
import { VectorSearchRepository } from "./VectorSearchRepository";
import { RetrievalResult } from "./RetrievalResult";

export class VectorSearchService {

  constructor(

    private embeddings = new EmbeddingService(),

    private repository = new VectorSearchRepository()

  ) {}

  async search(

    query: string

  ): Promise<RetrievalResult> {

    const embedding =
      await this.embeddings.createEmbedding(query);

    const chunks =
      await this.repository.search(embedding);

    return {

      query,

      chunks,

    };

  }

}