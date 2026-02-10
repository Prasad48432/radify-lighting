import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Light That <span className="text-amber-500">Defines</span> Spaces
        </h1>

        <p className="mt-6 text-lg md:text-xl text-zinc-400">
          Premium architectural and smart lighting solutions crafted to
          transform homes, offices, and luxury spaces.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
          <Link
            href="/products"
            className="bg-amber-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition"
          >
            Explore Collection
          </Link>

          <Link
            href="/contact"
            className="border border-zinc-700 px-8 py-4 rounded-full font-semibold hover:border-amber-500 hover:text-amber-400 transition"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
