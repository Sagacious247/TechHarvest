import { KnowledgeDocumentRepository } from "../repositories/KnowledgeDocumentRepository";
import { KnowledgeDocument } from "../models/KnowledgeDocument";

export class KnowledgeService {

  constructor(
    private repository: KnowledgeDocumentRepository
  ) {}

  add(document: KnowledgeDocument) {
    return this.repository.add(document);
  }

  getAll() {
    return this.repository.getAll();
  }

  getById(id: string) {
    return this.repository.getById(id);
  }

  update(
  id: string,
  updates: Partial<KnowledgeDocument>
) {

  const payload = {
    title: updates.title,
    category: updates.category,
    source: updates.source,
    tags: updates.tags,
    metadata: updates.metadata,
  };

  return this.repository.update(
    id,
    payload
  );
}

  delete(id: string) {
    return this.repository.delete(id);
  }

  count() {
    return this.repository.count();
  }

}