import { supabase } from "../../config/supabase";
import { KnowledgeDocument } from "../models/KnowledgeDocument";

export class KnowledgeDocumentRepository {

  async add(document: KnowledgeDocument) {

    const { data, error } = await supabase
      .from("knowledge_documents")
      .insert({
      tenant_id: document.tenantId,
      title: document.title,
      category: document.category,
      source: document.source,
      tags: document.tags ?? [],
      metadata: document.metadata ?? {},
    })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;

  }

  async getAll() {

    const { data, error } = await supabase
      .from("knowledge_documents")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      throw error;
    }

    return data;

  }



  async getById(id: string) {

  const { data, error } = await supabase
    .from("knowledge_documents")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;

}


async delete(id: string) {

  const { error } = await supabase
    .from("knowledge_documents")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

}


async update(
  id: string,
  updates: Partial<KnowledgeDocument>
) {

  const { data, error } = await supabase
    .from("knowledge_documents")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;

}


async count() {

  const { count, error } = await supabase
    .from("knowledge_documents")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (error) {
    throw error;
  }

  return count ?? 0;

}

}

