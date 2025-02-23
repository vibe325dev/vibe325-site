"use client";

import React from "react";
import Header from "@/components/ui/header";
import { Card, CardContent } from "@/components/ui/card";

const ContentPage = () => {
  const articles = [
    {
      title: "Exploring the West Texas Music Scene",
      description: "Discover the talented artists shaping the sound of the 325 area.",
      link: "/content/west-texas-music"
    },
    {
      title: "The Best Local Restaurants in 325",
      description: "A guide to the must-try food spots across the region.",
      link: "/content/local-restaurants"
    },
    {
      title: "Outdoor Adventures in West Texas",
      description: "Hiking, camping, and outdoor activities to explore.",
      link: "/content/outdoor-adventures"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center">Discover West Texas</h2>
        <p className="text-center mt-4">Curated stories and insights into the culture, food, and people of the 325 area.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {articles.map((article, index) => (
            <Card key={index} className="border rounded-lg shadow-lg hover:shadow-xl transition">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">{article.title}</h3>
                <p className="text-sm mt-2">{article.description}</p>
                <a href={article.link} className="text-orange-500 hover:underline mt-2 block">Read More</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContentPage;
