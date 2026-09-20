import { ChatMessage } from "../models/ChatMessage";

export class GeminiConversationFormatter {
  static toPromptHistory(
    messages: ChatMessage[]
  ): string[] {
    return messages.map(
      (message) => `${message.role}: ${message.content}`
    );
  }
}