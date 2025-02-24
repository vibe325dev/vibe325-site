import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Only for server-side

// Prevent missing environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase environment variables are missing");
}

// Use `anon` key for public reads
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { data, error } = await supabase.from("posts").select("*");
      if (error) throw error;
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      // Use the Service Role Key **only for secure server-side mutations**
      if (!supabaseServiceKey) {
        return res.status(403).json({ error: "Missing Supabase Service Role Key" });
      }

      const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
      const { title, content } = req.body;
      
      const { data, error } = await supabaseAdmin.from("posts").insert([{ title, content }]);

      if (error) throw error;
      return res.status(201).json(data);
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (error) {
    console.error("Error in /api/posts:", error);
    return res.status(500).json({ error: error.message });
  }
}