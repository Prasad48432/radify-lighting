"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useParams();

  return (
    <header className="sticky top-0 z-50 bg-background backdrop-blur-md border-b border-border">
      <nav className="container mx-auto flex items-center justify-between h-18 md:h-24 px-4 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary"
        >
          <img src="/logo.png" className="size-16 md:size-22" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.path}>
              <Link
                href={l.path}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  pathname === l.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden md:block">
          <Button size="sm">Get a Quote</Button>
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col p-4 gap-3">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link
                  href={l.path}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    pathname === l.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button size="sm" className="w-full">
                  Get a Quote
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
