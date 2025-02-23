import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Fetch all posts
    const { data, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    // Insert a new post
    const { text, user_email } = req.body;
    if (!text || !user_email) return res.status(400).json({ error: "Text and user_email required" });

    const { data, error } = await supabase.from("posts").insert([{ text, user_email }]);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ success: true, post: data[0] });
  }

  res.status(405).json({ error: "Method Not Allowed" });
}