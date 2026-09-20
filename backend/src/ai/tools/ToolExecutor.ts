import { ExecutionContext } from "../core/ExecutionContext";
import {
  ToolInput,
  ToolOutput,
} from "./BaseTool";
import { ToolRegistry } from "./ToolRegistry";

export class ToolExecutor {

  constructor(
    private readonly registry: ToolRegistry
  ) {}

  async execute(

    toolName: string,

    input: ToolInput,

    context: ExecutionContext

  ): Promise<ToolOutput> {

    const tool =
      this.registry.get(toolName);

    return await tool.execute(
      input,
      context
    );

  }

}