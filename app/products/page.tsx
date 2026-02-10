export const metadata = {
  title: "Products",
  description:
    "Explore architectural, decorative, and smart lighting products from Radify Lighting.",
};

export default function ProductsPage() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Our Products</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Recessed LED Systems</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Smart Control Panels</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Premium Pendant Lights</h2>
        </div>
      </div>
    </section>
  );
}
