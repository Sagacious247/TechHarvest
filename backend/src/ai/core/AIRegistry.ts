import { BaseAgent } from "../agents/BaseAgent";

export class AIRegistry {
  private agents = new Map<string, BaseAgent>();

  register(agent: BaseAgent) {
    this.agents.set(agent.name, agent);
  }

  get(name: string): BaseAgent | undefined {
    return this.agents.get(name);
  }

  getAll() {
    return [...this.agents.values()];
  }
}