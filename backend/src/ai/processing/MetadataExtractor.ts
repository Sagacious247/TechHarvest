export interface ChunkMetadata {

  source: string;

  chapter: string;

  section?: string;

  page?: number;

  tags?: string[];

}

export class MetadataExtractor {

  static create(

    source: string,

    chapter: string,

    section?: string

  ): ChunkMetadata {

    return {

      source,

      chapter,

      section,

      tags: [],

    };

  }

}