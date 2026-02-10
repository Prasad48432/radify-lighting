import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold">
            Radify <span className="text-amber-500">Lighting</span>
          </h3>
          <p className="mt-4 text-sm text-zinc-400">
            Redefining modern illumination with premium architectural and smart
            lighting solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>Architectural Lighting</li>
            <li>Smart Lighting</li>
            <li>Commercial Projects</li>
            <li>Outdoor Illumination</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>Email: info@radifylighting.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Radify Lighting. All rights reserved.
      </div>
    </footer>
  );
}
