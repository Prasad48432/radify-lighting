import Hero from "@/components/hero";

export const metadata = {
  title: "Premium Architectural & Smart Lighting",
  description:
    "Transform your space with Radify Lighting’s premium architectural and smart lighting systems.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Designed to Illuminate Modern Spaces
        </h2>
        <p className="text-gray-400 text-lg">
          Radify Lighting delivers cutting-edge LED and smart lighting solutions
          tailored for homes, offices, hotels, and luxury villas.
        </p>
      </section>

      <section className="py-20 px-6 bg-zinc-900">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Lighting Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold">Architectural Lighting</h3>
            <p className="text-gray-400 mt-2">
              Recessed, cove, and track systems for modern interiors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Decorative Fixtures</h3>
            <p className="text-gray-400 mt-2">
              Statement pendants and premium chandeliers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Smart Lighting</h3>
            <p className="text-gray-400 mt-2">
              App-controlled intelligent lighting ecosystems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
