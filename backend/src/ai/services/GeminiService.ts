import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private client: GoogleGenAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing.");
    }

    this.client = new GoogleGenAI({
      apiKey,
    });
  }

  async generate(prompt: string): Promise<string> {

  try {

    console.log("========== GEMINI REQUEST ==========");
    console.log(
      process.env.GEMINI_MODEL ??
      "gemini-2.5-flash"
    );

    const response =
      await this.client.models.generateContent({

        model:
          process.env.GEMINI_MODEL ??
          "gemini-2.5-flash",

        contents: prompt,

      });

    if (!response.text) {

      throw new Error(
        "Gemini returned an empty response."
      );

    }

    return response.text;

  } catch (error) {

    console.error(
      "========== GEMINI ERROR =========="
    );

    console.error(error);

    throw error;

  }

}
}
