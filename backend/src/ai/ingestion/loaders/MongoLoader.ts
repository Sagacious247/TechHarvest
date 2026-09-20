import {

  BaseLoader,
  LoadedDocument,

} from "./BaseLoader";

export class MongoLoader
  extends BaseLoader {

  readonly type = "mongo";

  async load(): Promise<LoadedDocument> {

    throw new Error(
      "Mongo loader not implemented."
    );

  }

}