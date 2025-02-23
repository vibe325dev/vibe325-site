"use client";

import React, { useState } from "react";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Placeholder for subscription logic
    setMessage("Thank you for subscribing to Vibe325! Stay tuned for the latest updates.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold">Stay Connected with Vibe325</h2>
        <p className="mt-4">Subscribe to our newsletter and be the first to know about West Texas events, stories, and exclusive content.</p>
        <div className="mt-6">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            className="px-4 py-2 border border-gray-300 rounded-lg w-2/3 text-black" 
          />
          <Button className="ml-2 bg-orange-500 text-white px-6 py-2 rounded-lg font-bold" onClick={handleSubscribe}>
            Subscribe
          </Button>
        </div>
        {message && <p className="mt-4 text-green-600 font-bold">{message}</p>}
      </section>
    </div>
  );
};

export default NewsletterPage;
