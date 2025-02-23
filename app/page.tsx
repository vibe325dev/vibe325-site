"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/ui/header";
import MerchSection from "@/components/ui/merchsection";


const Vibe325Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-700 text-white">
      <Header />
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.h2 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          The Heartbeat of West Texas
        </motion.h2>
        <p className="mt-4 text-lg">Discover the stories, culture, and businesses that make 325 unique.</p>
        <Button className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-lg font-bold">Explore Now</Button>
      </section>
      
      {/* Featured Content */}
      <section id="content" className="p-10 bg-white text-black">
        <h3 className="text-2xl font-bold text-center">Featured Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 border rounded-lg shadow-lg">
            <h4 className="text-xl font-bold">West Texas Music Scene</h4>
            <p className="text-sm mt-2">Exploring the local artists shaping 325’s sound.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h4 className="text-xl font-bold">Upcoming Events</h4>
            <p className="text-sm mt-2">Stay updated on festivals, rodeos, and more.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h4 className="text-xl font-bold">Local Business Spotlight</h4>
            <p className="text-sm mt-2">Meet the entrepreneurs driving 325 forward.</p>
          </div>
        </div>
      </section>
      
            {/* Merch Section */}
            <MerchSection />

      {/* Community Section */}
      <section id="community" className="p-10 bg-gray-100 text-black">
        <h3 className="text-2xl font-bold text-center">Join the Community</h3>
        <p className="text-center mt-4">Connect with fellow West Texans, share stories, and support local businesses.</p>
        <div className="text-center mt-6">
          <Link href="/community">
            <Button className="bg-orange-500 px-6 py-3 rounded-lg font-bold">Go to Community</Button>
          </Link>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section id="newsletter" className="p-10 bg-gray-800 text-white text-center">
        <h3 className="text-2xl font-bold">Stay Updated</h3>
        <p className="mt-2">Subscribe to our newsletter for the latest events, deals, and stories.</p>
        <input type="email" placeholder="Enter your email" className="mt-4 px-4 py-2 rounded-lg text-black" />
        <Button className="ml-2 bg-orange-500 px-6 py-2 rounded-lg font-bold">Subscribe</Button>
      </section>
      
      {/* Footer */}
      <footer className="p-6 text-center bg-gray-900 text-white">
        <p>&copy; 2025 Vibe325. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Vibe325Landing;

