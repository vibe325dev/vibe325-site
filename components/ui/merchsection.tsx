"use client";

import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import tshirt from "@/public/images/tan-tshirt-01.png";
import hoodie from "@/public/images/blk-hoodie-01.png";
import hat from "@/public/images/multi-hat-01.png";
import Image from "next/image";

// Define Merch Item Type
interface MerchItem {
  name: string;
  image: StaticImageData;
  price: string;
  link: string;
}

const merchItems: MerchItem[] = [
  { name: "Vibe 325 Hat", image: hat, price: "$25", link: "/merch" },
  { name: "Vibe 325 T-Shirt", image: tshirt, price: "$30", link: "/merch" },
  { name: "Vibe 325 Hoodie", image: hoodie, price: "$50", link: "/merch" },
];

const MerchSection = () => {
  const [displayedMerch, setDisplayedMerch] = useState<MerchItem[]>([]);

  useEffect(() => {
    if (merchItems.length > 3) {
      const shuffled = [...merchItems].sort(() => Math.random() - 0.5);
      setDisplayedMerch(shuffled.slice(0, 3));
    } else {
      setDisplayedMerch(merchItems);
    }
  }, []);

  return (
    <section id="merch" className="p-10 bg-white text-black text-center">
      <h3 className="text-2xl font-bold">Shop Vibe 325 Merch</h3>
      <p className="mt-2">Rep the 325 with exclusive gear.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {displayedMerch.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-lg hover:shadow-xl transition p-4">
           <Image src={item.image} alt={item.name} width={300} height={300} className="w-full h-auto mx-auto" />
            <h4 className="text-lg font-bold mt-4">{item.name}</h4>
            <p className="text-lg font-semibold">{item.price}</p>
            <a href={item.link} className="text-orange-500 hover:underline mt-2 block">
              Shop Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchSection;
