import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wclnuhgtekezbcwhaxwu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjbG51aGd0ZWtlemJjd2hheHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNTU3MTMsImV4cCI6MjA2MzkzMTcxM30.iWw5ORLKCsQ_lE8fGQoO0AkOcQoSVTxmJa7uV1lejpE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
