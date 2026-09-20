import { KnowledgeChunk } from "../models/KnowledgeChunk";
import { KeywordRanker } from "./KeywordRanker";
import { SimilarityRanker } from "./SimilarityRanker";

export class HybridRanker {

  static rank(

    question: string,

    chunks: KnowledgeChunk[]

  ): KnowledgeChunk[] {

    const keywordRanked =
      KeywordRanker.rank(
        question,
        chunks
      );

    const similarityRanked =
      SimilarityRanker.rank(
        keywordRanked
      );

    return similarityRanked.slice(0, 5);

  }

}