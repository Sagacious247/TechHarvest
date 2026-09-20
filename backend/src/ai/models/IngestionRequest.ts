import { KnowledgeCategory } from "../knowledge/KnowledgeCategory";

export interface IngestionRequest {

  tenantId: string;

  title: string;

  source?: string;

  category: KnowledgeCategory;

  text: string;

  tags?: string[];

  metadata?: Record<string, unknown>;

}