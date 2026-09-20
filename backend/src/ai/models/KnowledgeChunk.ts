export interface KnowledgeChunk {

  id?: string;

  tenantId: string;

  documentId: string;

  chunkIndex: number;

  content: string;

  embedding?: number[];

  metadata?: {

    source: string;

    chapter: string;

    section?: string;

    page?: number;

    tags?: string[];

  };

  similarity?: number;

  createdAt?: string;

}