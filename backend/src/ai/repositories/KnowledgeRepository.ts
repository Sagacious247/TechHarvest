import { supabase } from "../../config/supabase";

export class KnowledgeRepository {

  async findAll() {
    const { data, error } = await supabase
      .from("knowledge_documents")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  }

  async findById(id: string) {
    const { data, error } = await supabase
      .from("knowledge_documents")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data;
  }

  async delete(id: string) {
    const { error } = await supabase
      .from("knowledge_documents")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return true;
  }
}