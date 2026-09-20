export interface KnowledgeResult {

  id: string;

  title: string;

  category: string;

  content: string;

  similarity: number;

  metadata?: Record<string, any>;

}