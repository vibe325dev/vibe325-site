import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Home Link */}
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">VIBE 325</h1>
        </Link>

        {/* Hamburger Menu Button - Only Visible on Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Regular Navigation - Hidden on Mobile */}
        <nav className={`hidden md:flex space-x-6`}>
          <Link href="/content" className="hover:underline">Content</Link>
          <Link href="/merch" className="hover:underline">Merch</Link>
          <Link href="/community" className="hover:underline">Community</Link>
          <Link href="/newsletter" className="hover:underline">Newsletter</Link>
        </nav>
      </div>

      {/* Mobile Menu - Only Visible When Open */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4">
          <Link href="/content" className="block py-2 px-4 hover:bg-gray-700 rounded">Content</Link>
          <Link href="/merch" className="block py-2 px-4 hover:bg-gray-700 rounded">Merch</Link>
          <Link href="/community" className="block py-2 px-4 hover:bg-gray-700 rounded">Community</Link>
          <Link href="/newsletter" className="block py-2 px-4 hover:bg-gray-700 rounded">Newsletter</Link>
        </div>
      )}
    </header>
  );
};

export default Header;