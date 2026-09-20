export class TextCleaner {

  static clean(text: string): string {

    return text

      // normalize line endings
      .replace(/\r/g, "")

      // tabs → spaces
      .replace(/\t/g, " ")

      // collapse repeated spaces
      .replace(/[ ]{2,}/g, " ")

      // collapse too many blank lines
      .replace(/\n{3,}/g, "\n\n")

      // remove page numbers
      .replace(/Page\s+\d+/gi, "")

      // trim
      .trim();

  }

}