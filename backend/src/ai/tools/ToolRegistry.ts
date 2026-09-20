import { BaseTool } from "./BaseTool";

export class ToolRegistry {

  private readonly tools =
    new Map<string, BaseTool>();

  register(tool: BaseTool): void {

    if (this.tools.has(tool.name)) {
      throw new Error(
        `Tool '${tool.name}' is already registered.`
      );
    }

    this.tools.set(tool.name, tool);

  }

  get(name: string): BaseTool {

    const tool = this.tools.get(name);

    if (!tool) {
      throw new Error(
        `Tool '${name}' was not found.`
      );
    }

    return tool;

  }

  has(name: string): boolean {

    return this.tools.has(name);

  }

  remove(name: string): boolean {

    return this.tools.delete(name);

  }

  clear(): void {

    this.tools.clear();

  }

  getAll(): BaseTool[] {

    return [...this.tools.values()];

  }

}