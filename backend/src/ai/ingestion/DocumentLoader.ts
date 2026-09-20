export interface LoadedDocument {
  title: string;
  content: string;
  source: string;
  mimeType: string;
  metadata?: Record<string, unknown>;
}

export abstract class DocumentLoader {

  abstract load(...args: unknown[]): Promise<LoadedDocument>;

}