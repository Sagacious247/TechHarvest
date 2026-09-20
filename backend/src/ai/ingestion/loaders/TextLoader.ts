import {
  BaseLoader,
  LoadedDocument,
} from "./BaseLoader";

export class TextLoader extends BaseLoader {
  readonly type = "text";

  async load(
    input: string
  ): Promise<LoadedDocument> {

    return {
      title: "Text Document",

      content: input,

      source: "text",

      mimeType: "text/plain",

      metadata: {},
    };

  }
}