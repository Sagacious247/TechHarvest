import { Request, Response } from "express";
import { IngestionPipeline } from "../ingestion/IngestionPipeline";

export class IngestionController {
  private pipeline = new IngestionPipeline();

  async ingest(req: Request, res: Response) {
    console.log("🚀 IngestionController reached");
console.log(req.body);
    const result = await this.pipeline.process(req.body);

    res.json(result);
  }
}