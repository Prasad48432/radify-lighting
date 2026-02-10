"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Radify <span className="text-amber-500">Lighting</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/about" className="hover:text-amber-400 transition">
            About
          </Link>
          <Link href="/products" className="hover:text-amber-400 transition">
            Products
          </Link>
          <Link href="/projects" className="hover:text-amber-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-amber-400 transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-amber-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-400 transition"
        >
          Get Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800 px-6 py-6 space-y-4">
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
