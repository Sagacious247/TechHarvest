import { supabase } from "../../config/supabase";

export class SupabaseHealthService {
  static async check() {
    try {
      const { error } = await supabase
        .from("knowledge_documents")
        .select("*")
        .limit(1);

      return {
        connected: !error,
        error: error?.message,
      };
    } catch (error) {
      return {
        connected: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      };
    }
  }
}