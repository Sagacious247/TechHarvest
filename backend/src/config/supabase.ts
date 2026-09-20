import { createClient } from "@supabase/supabase-js";
import env from "./env";

export const supabase = createClient(
  
  env.SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

console.log("URL:", env.SUPABASE_URL);
console.log(
  "KEY:",
  env.SUPABASE_SERVICE_ROLE_KEY.substring(0, 25)
);