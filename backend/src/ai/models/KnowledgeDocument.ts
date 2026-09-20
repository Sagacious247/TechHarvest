export interface KnowledgeDocument {

  id?: string;

  tenantId: string;

  title: string;

  description?: string;

  category: string;

  source?: string;

  tags?: string[];

  metadata?: Record<string, unknown>;

  createdAt?: string;

  updatedAt?: string;

}