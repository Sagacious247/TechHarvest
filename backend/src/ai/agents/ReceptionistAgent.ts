import {
  BaseAgent,
  AIRequest,
  AIResponse,
} from "./BaseAgent";

export class ReceptionAgent
  extends BaseAgent {

  readonly name = "reception";

  async execute(
    request: AIRequest
  ): Promise<AIResponse> {

    return {

      success: true,

      message:
        `Welcome to TechHarvest, ${request.userId}! How can I help you today?`

    };

  }

}