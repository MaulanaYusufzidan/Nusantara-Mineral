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
import Footer from "@/components/Footer";

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
      </main>
      <Footer />
    </>
  );
}
