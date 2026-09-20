import { LoadedDocument } from "./loaders/BaseLoader";

export interface ParsedDocument {
  title: string;
  content: string;
  source: string;
  mimeType: string;
  metadata: Record<string, unknown>;
}

export class DocumentParser {
  parse(document: LoadedDocument): ParsedDocument {
    return {
      title: document.title,
      content: document.content.trim(),
      source: document.source,
      mimeType: document.mimeType,
      metadata: document.metadata ?? {},
    };
  }
}