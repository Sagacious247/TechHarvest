export interface RetrievalResult {
  documentId: string;

  chunkId: string;

  score: number;

  content: string;

  metadata?: Record<string, any>;
}