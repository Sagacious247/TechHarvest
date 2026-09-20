import { supabase } from "../../config/supabase";
import { KnowledgeChunk } from "../models/KnowledgeChunk";

export class KnowledgeChunkRepository {

  async create(
    chunk: KnowledgeChunk
  ) {

    const { data, error } =
      await supabase
        .from("knowledge_chunks")
        .insert({
          tenant_id: chunk.tenantId,
          document_id: chunk.documentId,
          chunk_index: chunk.chunkIndex,
          content: chunk.content,
          embedding: chunk.embedding,
          metadata: chunk.metadata,
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    return data;
  }

  async createMany(chunks: KnowledgeChunk[]) {

  const BATCH_SIZE = 20;

  const results: any[] = [];

  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {

    const batch = chunks
      .slice(i, i + BATCH_SIZE)
      .map(chunk => ({
        tenant_id: chunk.tenantId,
        document_id: chunk.documentId,
        chunk_index: chunk.chunkIndex,
        content: chunk.content,
        embedding: chunk.embedding,
        metadata: chunk.metadata,
      }));

    console.log(
      `Uploading batch ${
        Math.floor(i / BATCH_SIZE) + 1
      } (${batch.length} chunks)`
    );

    const { data, error } = await supabase
      .from("knowledge_chunks")
      .insert(batch)
      .select();

    if (error) {
      console.error(error);
      throw error;
    }

    results.push(...(data ?? []));
  }

  return results;
}

  async getByDocument(
    documentId: string
  ) {

    const { data, error } =
      await supabase
        .from("knowledge_chunks")
        .select("*")
        .eq("document_id", documentId)
        .order("chunk_index");

    if (error) {
      throw error;
    }

    return data;
  }

}