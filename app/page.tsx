import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Operations from "@/components/Operations";
import Sustainability from "@/components/Sustainability";
import Governance from "@/components/Governance";
import Investors from "@/components/Investors";
import Careers from "@/components/Careers";
import News from "@/components/News";
import CTA from "@/components/CTA";

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
        <CTA />
        <section className="flex min-h-[20vh] items-center justify-center bg-stone px-6 text-center">
          <p className="font-body text-charcoal-soft">
            Footer is built next.
          </p>
        </section>
      </main>
    </>
  );
}
