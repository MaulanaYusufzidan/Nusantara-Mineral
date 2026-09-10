import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Operations from "@/components/Operations";
import Sustainability from "@/components/Sustainability";
import Governance from "@/components/Governance";
import Investors from "@/components/Investors";
import Careers from "@/components/Careers";
import News from "@/components/News";

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
        <Careers />
        <News />
        <section className="flex min-h-[40vh] items-center justify-center bg-stone px-6 text-center">
          <p className="font-body text-charcoal-soft">
            CTA and Footer are built next.
          </p>
        </section>
      </main>
    </>
  );
}
