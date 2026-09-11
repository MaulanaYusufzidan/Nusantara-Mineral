"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutCopy, stats } from "@/data/about";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative w-full bg-charcoal pt-6">
      {/* Background Utama: Full-width Layar dengan Lengkungan Oval Tipis di Atas */}
      <div className="relative w-full overflow-hidden bg-stone px-6 py-20 sm:px-10 lg:px-16 lg:py-28
                      rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[2.5rem]">
        
        {/* Latar Belakang Gambar & Tekstur */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/Background-Operations.jpg" // Sesuaikan path gambar latar belakangmu
            alt="About Background"
            fill
            priority
            unoptimized
            className="object-cover object-center opacity-15 grayscale"
          />

          {/* Soft Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone/90 via-stone/80 to-stone/95" />

          {/* Ambient Glow Elements */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-moss/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-ochre/10 blur-3xl" />
        </div>

        {/* Konten Utama Terpusat */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Sisi Kiri: Sticky Heading + Badge */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:h-fit">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4"
              >
                {/* Badge/Tag Section */}
                <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-charcoal/80 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-moss" />
                </div>

                <h2 className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                  {aboutCopy.heading}
                </h2>
              </motion.div>
            </div>

            {/* Sisi Kanan: Paragraf Narasi */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="space-y-6 lg:col-span-7"
            >
              {aboutCopy.body.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className={`font-body leading-relaxed text-charcoal-soft/90 ${
                    index === 0
                      ? "text-lg font-medium text-charcoal sm:text-xl"
                      : "text-base sm:text-lg"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

          </div>

          {/* Section Stats dengan Garis Pemisah Vertikal */}
          <div className="mt-20 border-t border-charcoal/15 pt-12 lg:mt-24">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="group relative border-l-2 border-charcoal/20 pl-6 transition-colors duration-300 hover:border-moss"
                >
                  <p className="font-display text-3xl font-bold tracking-tight text-moss transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-body text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}