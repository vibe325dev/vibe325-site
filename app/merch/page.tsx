"use client";

import React from "react";
import Header from "@/components/ui/header";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import tshirt from "@/public/images/tan-tshirt-01.png";
import hoodie from "@/public//images/blk-hoodie-01.png";
import hat from "@/public/images/multi-hat-01.png";

const MerchPage = () => {
  const products = [
    {
      name: "Vibe 325 Hat",
      image: hat,
      price: "$25",
      description: "A stylish multi-color Richardson style 112 trucker hat featuring the Vibe325 logo.",
    },
    {
      name: "Vibe 325 T-Shirt",
      image: tshirt,
      price: "$30",
      description: "A soft and comfortable tan t-shirt with the Vibe325 logo, perfect for everyday wear.",
    },
    {
      name: "Vibe 325 Hoodie",
      image: hoodie,
      price: "$50",
      description: "A warm and stylish black hoodie with the Vibe325 logo, great for casual wear.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center">Vibe 325 Merch</h2>
        <p className="text-center mt-4">Shop exclusive Vibe 325 apparel and accessories.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.map((product, index) => (
            <Card key={index} className="border rounded-lg shadow-lg hover:shadow-xl transition p-4 text-center">
              <CardContent>
                <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto" />
                <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-bold mt-2">{product.price}</p>
                <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg font-bold">Buy Now</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MerchPage;

