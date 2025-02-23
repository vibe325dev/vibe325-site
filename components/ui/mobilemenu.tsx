import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">VIBE 325</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4">
          <Link href="/content" className="block py-2 px-4 hover:bg-gray-700 rounded">Content</Link>
          <Link href="/merch" className="block py-2 px-4 hover:bg-gray-700 rounded">Merch</Link>
          <Link href="/community" className="block py-2 px-4 hover:bg-gray-700 rounded">Community</Link>
          <Link href="/newsletter" className="block py-2 px-4 hover:bg-gray-700 rounded">Newsletter</Link>
        </div>
      )}
    </nav>
  );
};

export default MobileMenu;