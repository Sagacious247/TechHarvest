export interface KnowledgeChunk {

  index: number;

  content: string;

}

export class ChunkGenerator {

  generate(

    text: string,

    chunkSize = 1200,

    overlap = 200

  ): KnowledgeChunk[] {

    const chunks: KnowledgeChunk[] = [];

    let index = 0;

    for (

      let start = 0;

      start < text.length;

      start += chunkSize - overlap

    ) {

      chunks.push({

        index,

        content: text.slice(

          start,

          start + chunkSize

        ),

      });

      index++;

    }

    return chunks;

  }

}