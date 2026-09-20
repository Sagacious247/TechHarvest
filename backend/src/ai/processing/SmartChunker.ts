export interface SmartChunk {

  chapter: string;

  index: number;

  content: string;

}

export class SmartChunker {

  static split(
    chapter: string,
    text: string,
    size = 800
  ): SmartChunk[] {

    const chunks: SmartChunk[] = [];

    let index = 0;

    for (
      let i = 0;
      i < text.length;
      i += size
    ) {

      chunks.push({

        chapter,

        index,

        content: text.slice(i, i + size),

      });

      index++;

    }

    return chunks;

  }

}