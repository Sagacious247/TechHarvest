import { GoogleGenAI } from "@google/genai";

import { BaseEmbeddingProvider } from "./BaseEmbeddingProvider";

export class GeminiEmbeddingProvider extends BaseEmbeddingProvider {

  private client: GoogleGenAI;

  constructor() {
    super();

    const apiKey = process.env.GEMINI_API_KEY;
    console.log("API KEY EXISTS:", !!apiKey);
  console.log("API KEY LENGTH:", apiKey?.length);

    if (!apiKey) {
      throw new Error(
        "GEMINI_API_KEY is missing."
      );
    }

    this.client = new GoogleGenAI({
      apiKey,
    });

  }

async createEmbedding(text: string): Promise<number[]> {

    console.log("========== EMBEDDING TEST ==========");
console.log("SDK Version: @google/genai 2.16.0");
console.log(
  "Embedding Model:",
  process.env.GEMINI_EMBEDDING_MODEL ??
  "gemini-embedding-001"
);
console.log("Text:", text);
console.log("Type:", typeof text);
console.log("Is undefined:", text === undefined);

if (typeof text !== "string") {
  throw new Error(
    `Embedding input is invalid. Expected string but received ${typeof text}`
  );
}

console.log("Text length:", text.length);

    const response = await this.client.models.embedContent({

        model:
            process.env.GEMINI_EMBEDDING_MODEL ??
            "gemini-embedding-001",

        contents: [
            {
                parts: [
                    {
                        text,
                    },
                ],
            },
        ],

    });

    console.log(response);

    const embedding =
        response.embeddings?.[0]?.values;

    if (!embedding) {
        throw new Error("No embedding returned.");
    }

    return embedding;

}

}