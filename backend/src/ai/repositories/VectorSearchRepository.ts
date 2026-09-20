import { supabase } from "../../config/supabase";
import { KnowledgeChunk } from "../models/KnowledgeChunk";

export class VectorSearchRepository {

  async search(
    embedding: number[],
    limit = 5,
    tenantId?: string
  ): Promise<KnowledgeChunk[]> {

    const { data, error } = await supabase.rpc(
      "match_knowledge_chunks",
      {
        query_embedding: embedding,
        match_count: limit,
        tenant: tenantId ?? null,
      }
    );

    if (error) {
      throw error;
    }

    return (data ?? []).map((row: any) => ({
      id: row.id,
      tenantId: row.tenant_id,
      documentId: row.document_id,
      chunkIndex: row.chunk_index,
      content: row.content,
      similarity: row.similarity,
    }));
  }

}