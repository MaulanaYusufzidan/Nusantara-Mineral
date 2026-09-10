import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Operations from "@/components/Operations";
import Sustainability from "@/components/Sustainability";
import Governance from "@/components/Governance";
import Investors from "@/components/Investors";

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
        <Investors />
        <section className="flex min-h-[60vh] items-center justify-center bg-charcoal px-6 text-center">
          <p className="font-body text-stone/70">
            More sections are built one stage at a time.
          </p>
        </section>
      </main>
    </>
  );
}
