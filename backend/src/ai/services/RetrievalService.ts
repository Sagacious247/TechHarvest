import { EmbeddingService } from "./EmbeddingService";
import { VectorSearchRepository } from "../repositories/VectorSearchRepository";
import { KnowledgeChunk } from "../models/KnowledgeChunk";
import { HybridRanker } from "../ranking/HybridRanker";

export class RetrievalService {

  private embeddingService =
    new EmbeddingService();

  private repository =
    new VectorSearchRepository();

  async retrieve(
    tenantId: string,
    question: string,
    limit = 5
  ): Promise<KnowledgeChunk[]> {

    const embedding =
      await this.embeddingService.createEmbedding(
        question
      );

    const chunks =
  await this.repository.search(
    embedding,
    20,
    tenantId
  );

return HybridRanker.rank(
  question,
  chunks
);

  }

}