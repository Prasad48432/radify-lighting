import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Sun,
  Settings,
  Star,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://radifylighting.in"),
    title: "Radify Lighting Solutions | Premium Architectural & Smart Lighting",
    description:
      "Radify Lighting provides premium architectural, decorative and smart lighting solutions for modern homes and commercial spaces.",
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: "Radify Lighting Solutions",
      description:
        "Radify Lighting provides premium architectural, decorative and smart lighting solutions for modern homes and commercial spaces.",
      url: "https://radifylighting.in",
      images: [
        {
          url: "https://radifylighting.in/og_image.png", // ✅ FULL URL
          width: 1200,
          height: 630,
          alt: "Radify Lighting Solutions OpenGraph Image",
        },
      ],
      siteName: "Radify Lighting Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title: "Radify Lighting Solutions",
      description:
        "Radify Lighting provides premium architectural, decorative and smart lighting solutions for modern homes and commercial spaces.",
      images: ["https://radifylighting.in/og_image.png"], // ✅ FULL URL
    },
  };
}

const services = [
  {
    icon: Lightbulb,
    title: "Indoor Lighting",
    desc: "Elegant interior lighting designs for homes, offices, and commercial spaces.",
  },
  {
    icon: Sun,
    title: "Outdoor Lighting",
    desc: "Weather-resistant outdoor solutions for landscapes, facades, and pathways.",
  },
  {
    icon: Settings,
    title: "End-to-End Execution",
    desc: "From consultation and product selection to installation — we handle everything.",
  },
];

const projects = [
  {
    title: "Modern Office Lobby",
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    title: "Garden Pathway Lights",
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    title: "Luxury Residence",
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    title: "Commercial Facade",
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Radify transformed our office space with stunning lighting. The team was professional and delivered on time.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    text: "Excellent outdoor lighting for our villa. The garden looks magical at night. Highly recommend!",
    rating: 5,
  },
  {
    name: "Anitha Reddy",
    text: "From consultation to installation, the entire experience was seamless. Top-quality products.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-32 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col items-start justify-center w-full lg:w-3/5">
            <AnimatedSection className="w-full">
              <p className="text3xl md:text-4xl font-bold uppercase text-primary mb-4">
                Radify Lighting Solutions
              </p>
              <h1 className="text-foreground text-4xl md:text-7xl font-bold leading-tight max-w-3xl mb-6 bricolage">
                Engineered Light <br />
                for Every Space
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
                Premium indoor &amp; outdoor lighting solutions — from product
                selection to full project execution.
              </p>
              <div className="flex gap-3 w-full">
                {/* <Link href="/contact"> */}
                <Button variant={"default"} size={"lg"}>
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                {/* </Link> */}
                <Link href="/portfolio">
                  <Button variant="outline" size="lg">
                    View Projects
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <div className="relative w-full lg:w-2/5 h-105 md:h-125 mt-12 lg:mt-0">
            {/* Image 1 */}
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPsJXlSJbHMS0yimFhuVIOpBJz_B_jEg2Bbw0-C=w243-h174-n-k-no-nu"
              alt="Indoor Lighting"
              referrerPolicy="no-referrer"
              className="absolute top-0 left-0 w-56 md:w-64 lg:w-82 rounded-xl shadow-xl object-cover"
            />

            {/* Image 2 */}
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMXzJk3LuzngO5eYOCeJPHXONFqTqPeyI63kHYK=s680-w680-h510-rw"
              alt="Outdoor Lighting"
              referrerPolicy="no-referrer"
              className="absolute top-24 right-3 lg:-right-3 w-60 md:w-72 lg:w-90 rounded-xl shadow-2xl object-cover"
            />

            {/* Image 3 */}
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipOqSruR1ByO_pvqOBnXoM99-5fN_kInJJT4xbdR=s680-w680-h510-rw"
              referrerPolicy="no-referrer"
              alt="Commercial Lighting"
              className="absolute bottom-0 left-6 w-52 md:w-60 lg:w-82 rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <Card className="h-full text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-8 pb-6 flex flex-col items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-lg aspect-3/2">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-xs font-medium text-primary">
                      {p.category}
                    </span>
                    <span className="text-sm font-semibold text-primary-foreground">
                      {p.title}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio">
              <Button variant="outline">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            Client Love
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/30 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-3.5 w-3.5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-semibold">{t.name}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 py-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Light Up Your Space?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
              Get in touch with our team for a free consultation and quote.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
