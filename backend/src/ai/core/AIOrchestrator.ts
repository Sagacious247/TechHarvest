import {
  AIRequest,
  AIResponse,
} from "../agents/BaseAgent";

import { AgentFactory } from "./AgentFactory";

export class AIOrchestrator {
  constructor(
    private factory: AgentFactory
  ) {}

  async process(
    agentName: string,
    request: AIRequest
  ): Promise<AIResponse> {

    const agent =
      this.factory.create(agentName);

    return agent.execute(request);

  }
}