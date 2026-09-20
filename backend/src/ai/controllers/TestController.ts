import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";

import env from "../../config/env";
import { EmbeddingService } from "../services/EmbeddingService";

export class TestController {

  private embeddings =
    new EmbeddingService();

  testEmbedding = async (
    req: Request,
    res: Response
  ) => {

    if (!req.body || !req.body.text) {
  return res.status(400).json({
    success: false,
    message: "Request body must contain a 'text' field."
  });
}

const { text } = req.body;

    const embedding =
      await this.embeddings.createEmbedding(text);

    return res.json({

      success: true,

      dimensions: embedding.length,

      preview: embedding.slice(0, 10),

    });

  };

  listModels = async (
  req: Request,
  res: Response
) => {

  const ai = new GoogleGenAI({
    apiKey: env.GEMINI_API_KEY,
  });

  const pager = await ai.models.list();

  const embeddingModels: any[] = [];

  for await (const model of pager) {

    if (
      model.name?.toLowerCase().includes("embed") ||
      model.displayName?.toLowerCase().includes("embed")
    ) {
      embeddingModels.push(model);
    }

  }

  return res.json(embeddingModels);

};

}