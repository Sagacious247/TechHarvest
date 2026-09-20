import {

  BaseLoader,
  LoadedDocument,

} from "./BaseLoader";

export class WebsiteLoader
  extends BaseLoader {

  readonly type = "website";

  async load(): Promise<LoadedDocument> {

    throw new Error(
      "Website loader not implemented."
    );

  }

}