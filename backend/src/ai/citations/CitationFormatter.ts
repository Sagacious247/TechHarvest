import { KnowledgeChunk } from "../models/KnowledgeChunk";

export class CitationFormatter {

  static build(
    chunks: KnowledgeChunk[]
  ): string {

    if (!chunks.length) {

      return "";

    }

    const citations = chunks.map(chunk => {

      const source =
        chunk.metadata?.source ??
        "Unknown Source";

      const chapter =
        chunk.metadata?.chapter ??
        "Unknown Chapter";

      const section =
        chunk.metadata?.section ??
        "";

      return `Source:
${source}
${chapter}
${section}`;

    });

    return citations.join("\n\n");

  }

}