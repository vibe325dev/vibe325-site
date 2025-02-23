import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("community_posts").select("*");

    if (error) {
      console.error("Supabase Error:", error.message); // ✅ Log the error
      return res.status(500).json({ error: error.message }); // ✅ Return error message
    }

    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { text, user_email } = req.body;
    if (!text || !user_email) return res.status(400).json({ error: "Missing fields" });

    const { data, error } = await supabase.from("community_posts").insert([{ text, user_email }]);

    if (error) {
      console.error("Insert Error:", error.message); // ✅ Log error
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json({ success: true, post: data[0] });
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}