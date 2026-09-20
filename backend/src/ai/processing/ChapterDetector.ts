export interface Chapter {

  title: string;

  content: string;

}

export class ChapterDetector {

  static split(text: string): Chapter[] {

    const parts = text.split(
      /(?=Chapter\s+\w+)/i
    );

    return parts.map(part => {

      const lines = part.split("\n");

      return {

        title: lines[0].trim(),

        content: part,

      };

    });

  }

}