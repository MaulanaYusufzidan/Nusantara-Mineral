import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Operations from "@/components/Operations";
import Sustainability from "@/components/Sustainability";
import Governance from "@/components/Governance";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Operations />
        <Sustainability />
        <Governance />
        <section className="flex min-h-[60vh] items-center justify-center bg-stone px-6 text-center">
          <p className="font-body text-charcoal-soft">
            More sections are built one stage at a time.
          </p>
        </section>
      </main>
    </>
  );
}
