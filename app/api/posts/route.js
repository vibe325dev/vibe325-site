import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ✅ Ensure Supabase environment variables exist
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Server-side only

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase environment variables are missing");
}

// ✅ Supabase client for public reads
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** 
 * ✅ GET: Fetch all posts 
 * API Route: GET /api/posts
 */
export async function GET() {
  try {
    const { data, error } = await supabase.from("posts").select("*");
    if (error) throw error;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/** 
 * ✅ POST: Create a new post (Server-side only) 
 * API Route: POST /api/posts
 */
export async function POST(req) {
  try {
    // Ensure Service Role Key is present for secure writes
    if (!supabaseServiceKey) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
    const body = await req.json();
    const { title, content } = body;

    // ✅ Insert a new post
    const { data, error } = await supabaseAdmin.from("posts").insert([{ title, content }]);
    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}