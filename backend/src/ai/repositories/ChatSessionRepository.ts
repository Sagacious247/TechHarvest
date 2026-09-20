import { supabase } from "../../config/supabase";
import { ChatSession } from "../models/ChatSession";

export class ChatSessionRepository {

  async create(session: ChatSession) {

    const { data, error } =
      await supabase
        .from("chat_sessions")
        .insert({
          tenant_id: session.tenantId,
          user_id: session.userId,
          title: session.title ?? "New Chat",
        })
        .select()
        .single();

    if (error) throw error;

    return data;
  }

  async getById(id: string) {

    const { data, error } =
      await supabase
        .from("chat_sessions")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;

    return data;
  }

  async getUserSessions(
    tenantId: string,
    userId: string
  ) {

    const { data, error } =
      await supabase
        .from("chat_sessions")
        .select("*")
        .eq("tenant_id", tenantId)
        .eq("user_id", userId)
        .order("updated_at", {
          ascending: false,
        });

    if (error) throw error;

    return data;
  }

  async updateTitle(
    id: string,
    title: string
  ) {

    const { data, error } =
      await supabase
        .from("chat_sessions")
        .update({
          title,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
  }

  async delete(id: string) {

    const { error } =
      await supabase
        .from("chat_sessions")
        .delete()
        .eq("id", id);

    if (error) throw error;
  }

}