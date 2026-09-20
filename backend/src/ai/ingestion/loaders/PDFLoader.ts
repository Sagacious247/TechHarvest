import pdfParse from "pdf-parse";
import {
  BaseLoader,
  LoadedDocument,
} from "./BaseLoader";

export class PDFLoader extends BaseLoader {

  readonly type = "pdf";

  async load(
    input: Buffer
  ): Promise<LoadedDocument> {

    const result = await pdfParse(input);

if (!result.text.trim()) {
    throw new Error(
        "The uploaded PDF contains no readable text."
    );
}

    return {
      title: result.info?.Title || "Untitled PDF",
      content: result.text,
      source: "uploaded-file",
      mimeType: "application/pdf",
      metadata: {
    pages: result.numpages,
    author: result.info?.Author,
    creator: result.info?.Creator,
    producer: result.info?.Producer,
    subject: result.info?.Subject,
    keywords: result.info?.Keywords,
    creationDate: result.info?.CreationDate,
    modificationDate: result.info?.ModDate,
}
    };

  }

}