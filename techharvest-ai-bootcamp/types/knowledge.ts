export interface KnowledgeDocument {
  id: string;
  tenant_id: string;

  title: string;
  category: string;
  source: string;

  description?: string | null;

  metadata?: any;

  tags: string[];

  created_at: string;
  updated_at: string;
}