export interface AIRequest {
  userId: string;

  message: string;

  conversationId?: string;

  metadata?: Record<string, any>;

  knowledge?: string;

  retrievedChunks?: any[];
}

export interface AIResponse {
  success: boolean;

  message: string;

  data?: any;
}

export abstract class BaseAgent {
  abstract readonly name: string;

  abstract execute(
    request: AIRequest
  ): Promise<AIResponse>;
}