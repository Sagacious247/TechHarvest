import {
  ChatSessionRepository,
  ChatMessageRepository,
} from "../repositories";
 import { ChatMessage } from "../models/ChatMessage";

export class ConversationService {

  private sessions =
    new ChatSessionRepository();

  private messages =
    new ChatMessageRepository();

  //
  // Create a new chat
  //
  async createSession(
    tenantId: string,
    userId: string
  ) {

    return this.sessions.create({
      tenantId,
      userId,
      title: "New Chat",
    });

  }

  //
  // Get all chats
  //
  async getSessions(
    tenantId: string,
    userId: string
  ) {

    return this.sessions.getUserSessions(
      tenantId,
      userId
    );

  }

  //
  // Get one conversation
  //


async getConversation(
  sessionId: string
): Promise<ChatMessage[]> {

  return this.messages.getConversation(
    sessionId
  );

}

  //
  // Save user message
  //
  async saveUserMessage(
    sessionId: string,
    content: string
  ) {

    return this.messages.create({

      sessionId,

      role: "user",

      content,

    });

  }

  //
  // Save AI response
  //
  async saveAssistantMessage(
  sessionId: string,
  content: string,
  citations?: string
) {

  return this.messages.create({

    sessionId,

    role: "assistant",

    content,

    citations,

  });

}

  //
  // Rename chat
  //
  async renameSession(
    sessionId: string,
    title: string
  ) {

    return this.sessions.updateTitle(
      sessionId,
      title
    );

  }

  //
  // Delete chat
  //
  async deleteSession(
    sessionId: string
  ) {

    await this.messages.deleteConversation(
      sessionId
    );

    return this.sessions.delete(
      sessionId
    );

  }

}