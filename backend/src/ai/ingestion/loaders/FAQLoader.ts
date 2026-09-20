import {

  BaseLoader,
  LoadedDocument,

} from "./BaseLoader";

export class FAQLoader
  extends BaseLoader {

  readonly type = "faq";

  async load(): Promise<LoadedDocument> {

    throw new Error(
      "FAQ loader not implemented."
    );

  }

}