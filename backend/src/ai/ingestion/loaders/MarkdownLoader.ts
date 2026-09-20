import {

  BaseLoader,
  LoadedDocument,

} from "./BaseLoader";

export class MarkdownLoader
  extends BaseLoader {

  readonly type = "markdown";

  async load(): Promise<LoadedDocument> {

    throw new Error(
      "Markdown loader not implemented."
    );

  }

}