// export abstract class BaseEmbeddingProvider {

//   abstract createEmbedding(
//     text: string
//   ): Promise<number[]>;

// }

export abstract class BaseEmbeddingProvider {
  /**
   * Generate a vector embedding for a piece of text.
   */
  abstract createEmbedding(
    text: string
  ): Promise<number[]>;

  /**
   * Optional batch embedding generation.
   */
  async createEmbeddings(
    texts: string[]
  ): Promise<number[][]> {
    return Promise.all(
      texts.map((text) => this.createEmbedding(text))
    );
  }
}