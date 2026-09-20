import { ExecutionContext } from "../core/ExecutionContext";

export interface ToolInput {
  [key: string]: unknown;
}

export interface ToolOutput {
  success: boolean;
  data?: unknown;
  message?: string;
}

export abstract class BaseTool {
  abstract readonly name: string;
  abstract readonly description: string;

  abstract execute(
    input: ToolInput,
    context: ExecutionContext
  ): Promise<ToolOutput>;
}