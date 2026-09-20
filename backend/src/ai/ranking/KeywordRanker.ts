import { KnowledgeChunk } from "../models/KnowledgeChunk";

interface RankedChunk extends KnowledgeChunk {
  keywordScore: number;
}

export class KeywordRanker {

  static rank(
    question: string,
    chunks: KnowledgeChunk[]
  ): RankedChunk[] {

    const keywords = question
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter(word => word.length > 2);

    return chunks
      .map(chunk => {

        const content =
          chunk.content.toLowerCase();

        let score = 0;

        for (const keyword of keywords) {

          if (content.includes(keyword)) {
            score++;
          }

        }

        return {
          ...chunk,
          keywordScore: score,
        };

      })
      .sort(
        (a, b) =>
          b.keywordScore - a.keywordScore
      );

  }

}