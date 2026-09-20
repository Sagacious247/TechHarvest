import { KnowledgeChunk } from "../models/KnowledgeChunk";

export class SimilarityRanker {

  static rank(
    chunks: KnowledgeChunk[]
  ): KnowledgeChunk[] {

    return [...chunks].sort(

      (a, b) =>

        (b.similarity ?? 0) -

        (a.similarity ?? 0)

    );

  }

}