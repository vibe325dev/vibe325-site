import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET() {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error("Supabase Error:", error.message); // ✅ Log error
    return new Response(JSON.stringify({ error: error.message }), { status: 500 }); // ✅ Return error
  }

  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req) {
  try {
    const { text, user_email } = await req.json();
    if (!text || !user_email) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const { data, error } = await supabase.from("posts").insert([{ text, user_email }]);

    if (error) {
      console.error("Insert Error:", error.message); // ✅ Log error
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, post: data[0] }), { status: 201 });
  } catch (err) {
    console.error("Unexpected API Error:", err); // ✅ Catch unexpected errors
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}