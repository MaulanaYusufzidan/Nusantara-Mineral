import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <section className="flex min-h-[60vh] items-center justify-center bg-stone px-6 text-center">
          <p className="font-body text-charcoal-soft">
            More sections are built one stage at a time.
          </p>
        </section>
      </main>
    </>
  );
}
