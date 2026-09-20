export interface RetrievedChunk {
  id: string;
  documentId: string;
  content: string;
  similarity: number;
  metadata?: Record<string, any>;
}

export interface RetrievalResult {
  query: string;
  chunks: RetrievedChunk[];
}