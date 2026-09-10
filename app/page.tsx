import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <section className="flex min-h-[60vh] items-center justify-center bg-stone px-6 text-center">
          <p className="font-body text-charcoal-soft">
            More sections are built one stage at a time.
          </p>
        </section>
      </main>
    </>
  );
}
