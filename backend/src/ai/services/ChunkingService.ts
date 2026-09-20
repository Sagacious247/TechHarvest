export interface TextChunk {
  index: number;
  content: string;
}

export class ChunkingService {

  private readonly chunkSize = 1200;

  private readonly overlap = 200;

  chunk(text: string): TextChunk[] {

    const chunks: TextChunk[] = [];

    let start = 0;

    let index = 0;

    while (start < text.length) {

      const end = Math.min(
        start + this.chunkSize,
        text.length
      );

      chunks.push({
        index,
        content: text.slice(start, end),
      });

      start += this.chunkSize - this.overlap;

      index++;

    }

    return chunks;

  }

}