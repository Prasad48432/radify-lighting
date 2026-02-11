import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Brand */}
      <div>
        <h3 className="font-display text-xl font-bold mb-3">
          Radify<span className="text-primary">.</span>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Complete lighting solutions — from product selection to full project
          execution. Indoor &amp; outdoor.
        </p>
      </div>

      {/* Quick links */}
      <div>
        <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">
          Quick Links
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services" },
            { label: "Portfolio", path: "/portfolio" },
            { label: "Testimonials", path: "/testimonials" },
            { label: "Contact", path: "/contact" },
          ].map((l) => (
            <li key={l.path}>
              <Link
                href={l.path}
                className="hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact info */}
      <div>
        <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">
          Contact
        </h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
            <span>
              5-275, Ayyappa Nagar Colony, Chandra Nagar Colony, Bolarum,
              Secunderabad, Telangana 500010
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-primary" />
            <a
              href="tel:+919440311081"
              className="hover:text-primary transition-colors"
            >
              +91 94403 11081
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            <a
              href="mailto:info@radifylighting.in"
              className="hover:text-primary transition-colors"
            >
              info@radifylighting.in
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Radify Lighting Solutions. All rights
        reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
