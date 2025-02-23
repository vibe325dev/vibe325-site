"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";

// Define Post Type
interface Post {
  id?: number; // or string if using UUIDs
  text: string;
  user_email: string;
  created_at?: string; // optional timestamp
}

const CommunityPage = () => {
  const [communityPosts, setCommunityPosts] = useState<Post[]>([]); // ✅ Define type
  const [newPost, setNewPost] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data: Post[]) => {
        if (Array.isArray(data)) { // ✅ Ensure response is an array
          setCommunityPosts(data);
        } else {
          console.error("API response is not an array:", data);
          setCommunityPosts([]); // Fallback to empty array to prevent map error
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setCommunityPosts([]); // Prevents crash if API fails
      });
  }, []);

  const handleNewPost = async () => {
    if (!newPost || !userEmail) return alert("Please enter post and email");

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newPost, user_email: userEmail }),
    });

    const result = await response.json();
    if (result.success) {
      setCommunityPosts([result.post, ...communityPosts]); // ✅ No more TypeScript error
      setNewPost("");
    } else {
      alert("Failed to post. Try again.");
    }
  };

    return (
        <div className="min-h-screen bg-white text-black">
          {/* ✅ Ensure Header is used here */}
          <Header />
    
          <section className="p-10">
            <h3 className="text-2xl font-bold text-center">Community Posts</h3>
            <p className="text-center mt-4">Share your stories & connect with fellow West Texans.</p>
    
            <div className="mt-6 text-center">
              <input 
                type="email" 
                value={userEmail} 
                onChange={(e) => setUserEmail(e.target.value)} 
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg border border-gray-300 text-black w-2/3"
              />
              <input 
                type="text" 
                value={newPost} 
                onChange={(e) => setNewPost(e.target.value)} 
                placeholder="Share something..."
                className="px-4 py-2 rounded-lg border border-gray-300 text-black w-2/3 mt-2"
              />
              <Button className="ml-2 bg-orange-500 px-6 py-2 rounded-lg font-bold" onClick={handleNewPost}>
                Post
              </Button>
            </div>

      <div className="mt-6">
        {communityPosts.map((post, index) => (
          <Card key={index} className="mt-4">
            <CardContent className="p-4">
              <p>{post.text}</p>
              <span className="text-gray-500 text-sm">Posted by {post.user_email}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </div>
  );
};

export default CommunityPage;
