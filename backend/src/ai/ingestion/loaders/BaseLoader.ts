export interface LoadedDocument {
  title: string;
  content: string;
  source: string;
  mimeType: string;
  metadata?: Record<string, unknown>;
}

export abstract class BaseLoader<TInput = unknown> {
  abstract readonly type: string;

  abstract load(
    input: TInput
  ): Promise<LoadedDocument>;
}