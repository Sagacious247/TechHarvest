import { ChunkingService } from "../services/ChunkingService";
import { EmbeddingService } from "../services/EmbeddingService";

import { KnowledgeDocumentRepository } from "../repositories/KnowledgeDocumentRepository";
import { KnowledgeChunkRepository } from "../repositories/KnowledgeChunkRepository";

import { KnowledgeChunk } from "../models/KnowledgeChunk";
import { IngestionRequest } from "../models/IngestionRequest";

export class IngestionPipeline {

  private chunkingService =
    new ChunkingService();

  private embeddingService =
    new EmbeddingService();

  private documentRepository =
    new KnowledgeDocumentRepository();

  private chunkRepository =
    new KnowledgeChunkRepository();

  async process(
    request: IngestionRequest
  ) {

    /**
     * STEP 1
     * Save document metadata
     */

    const document =
      await this.documentRepository.add({

        tenantId: request.tenantId,

        title: request.title,

        category: request.category,

        source: request.source,

        tags: request.tags ?? [],

        metadata: request.metadata ?? {},

      });

    /**
     * STEP 2
     * Split into chunks
     */

    const chunks =
      this.chunkingService.chunk(
        request.text
      );

    /**
     * STEP 3
     * Build KnowledgeChunk objects
     */

    const knowledgeChunks: KnowledgeChunk[] = [];

    for (const chunk of chunks) {

      const embedding =
        await this.embeddingService.createEmbedding(
          chunk.content
        );

      knowledgeChunks.push({

        tenantId:
          request.tenantId,

        documentId:
          document.id,

        chunkIndex:
          chunk.index,

        content:
          chunk.content,

        embedding,

      });

    }

    /**
     * STEP 4
     * Save all chunks
     */

    await this.chunkRepository.createMany(
      knowledgeChunks
    );

    /**
     * STEP 5
     * Return report
     */

    return {

      success: true,

      documentId:
        document.id,

      totalChunks:
        knowledgeChunks.length,

      chunks:
        knowledgeChunks,

    };

  }

}