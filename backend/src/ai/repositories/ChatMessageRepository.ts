import { supabase } from "../../config/supabase";
import { ChatMessage } from "../models/ChatMessage";

export class ChatMessageRepository {

  async create(message: ChatMessage) {

    const { data, error } =
      await supabase
        .from("chat_messages")
        .insert({
           session_id: message.sessionId,
           role: message.role,
           content: message.content,
           citations: message.citations,
         })
        .select()
        .single();

    if (error) throw error;

    return data;
  }

  async getConversation(
    sessionId: string
  ) {

    const { data, error } =
      await supabase
        .from("chat_messages")
        .select("*")
        .eq("session_id", sessionId)
        .order("created_at", {
          ascending: true,
        });

    if (error) throw error;

    return data;
  }

  async deleteConversation(
    sessionId: string
  ) {

    const { error } =
      await supabase
        .from("chat_messages")
        .delete()
        .eq("session_id", sessionId);

    if (error) throw error;
  }

}