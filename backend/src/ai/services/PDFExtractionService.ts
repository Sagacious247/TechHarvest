import pdf from "pdf-parse";

export class PDFExtractionService {

  async extract(
    file: Express.Multer.File
  ) {

    const result =
      await pdf(file.buffer);

    return {

      text: result.text,

      pages: result.numpages,

      info: result.info,

    };

  }

}