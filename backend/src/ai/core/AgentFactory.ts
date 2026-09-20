import { AIRegistry } from "./AIRegistry";

export class AgentFactory {
  constructor(
    private registry: AIRegistry
  ) {}

  create(name: string) {
    const agent =
      this.registry.get(name);

    if (!agent) {
      throw new Error(
        `Unknown AI Agent: ${name}`
      );
    }

    return agent;
  }
}