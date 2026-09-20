import mammoth from "mammoth";

import {
  BaseLoader,
  LoadedDocument,
} from "./BaseLoader";

export class DOCXLoader extends BaseLoader<Buffer> {
  readonly type = "docx";

  async load(
    input: Buffer
  ): Promise<LoadedDocument> {

    const result = await mammoth.extractRawText({
      buffer: input,
    });

    // Normalize extracted text
    const content = result.value
      .replace(/\r/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/[ \t]+/g, " ")
      .trim();

    // Reject empty documents
    if (!content) {
      throw new Error(
        "The uploaded DOCX contains no readable text."
      );
    }

    return {
      title: "Untitled DOCX",

      content,

      source: "uploaded-file",

      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

      metadata: {
        warningCount: result.messages.length,
        warnings: result.messages,
        extractedCharacters: content.length,
      },
    };
  }
}