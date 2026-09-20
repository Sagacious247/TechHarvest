import { TextCleaner } from "./TextCleaner";
import { ChapterDetector } from "./ChapterDetector";
import { SmartChunker } from "./SmartChunker";
import { MetadataExtractor } from "./MetadataExtractor";

export class KnowledgePipeline {

  static process(

    source: string,

    rawText: string

  ) {

    const cleanText =
      TextCleaner.clean(rawText);

    const chapters =
      ChapterDetector.split(cleanText);

    const chunks = [];

    for (const chapter of chapters) {

      const smartChunks =
        SmartChunker.split(

          chapter.title,

          chapter.content

        );

      for (const chunk of smartChunks) {

        chunks.push({

          content: chunk.content,

          metadata:
            MetadataExtractor.create(

              source,

              chapter.title

            ),

        });

      }

    }

    return chunks;

  }

}