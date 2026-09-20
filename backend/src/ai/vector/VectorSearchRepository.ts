import { supabase } from "../../config/supabase";

export class VectorSearchRepository {

  async search(
    embedding: number[],
    limit = 8
  ) {

    // pgvector search will be implemented here
    // after we create the SQL function

    return [];
  }

}