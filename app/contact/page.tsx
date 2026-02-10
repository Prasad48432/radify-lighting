export const metadata = {
  title: "Contact",
  description:
    "Contact Radify Lighting for lighting consultation and project inquiries.",
};

export default function ContactPage() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-zinc-900"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-zinc-900"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded bg-zinc-900"
        />
        <button className="bg-amber-500 text-black px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
