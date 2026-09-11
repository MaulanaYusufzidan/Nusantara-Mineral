"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  pillars,
  sustainabilityHeading,
  sustainabilityIntro,
} from "@/data/sustainability";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative overflow-hidden bg-charcoal px-6 py-28 lg:px-10 lg:py-36">
      {/* Background Container */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Gambar Latar Belakang - Opacity dan Penjernihan Tekstur */}
        <Image
          src="/images/Latest news.jpg"
          alt="Sustainability Background"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-45 brightness-90 contrast-110"
        />

        {/* Overlay Gradien Halus Agar Gambar dan Teks Sama-Sama Jelas */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/50 to-charcoal/90" />

        {/* Glow Accent */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-moss/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-ochre/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          
          {/* Kolom Gambar Samping */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/20 shadow-2xl lg:col-span-2 lg:sticky lg:top-28 lg:aspect-auto lg:h-[36rem]"
          >
            <Image
              src="/images/Sustain-2.jpg"
              alt="Sustainability illustration"
              fill
              unoptimized
              className="object-cover"
            />
          </motion.div>

          {/* Kolom Teks Utama */}
          <div className="lg:col-span-3">
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-xl font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {sustainabilityHeading}
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="mt-6 max-w-lg font-body text-base leading-relaxed text-stone/85 sm:text-lg"
            >
              {sustainabilityIntro}
            </motion.p>

            {/* List Pilar */}
            <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="grid gap-4 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8"
                >
                  <h3 className="font-display text-xl text-ochre">
                    {pillar.title}
                  </h3>
                  <div>
                    <p className="font-body text-sm leading-relaxed text-stone/80 sm:text-base">
                      {pillar.description}
                    </p>
                    <p className="mt-3 font-body text-sm text-ochre">
                      <span className="font-display text-base font-bold text-white">
                        {pillar.stat.value}
                      </span>{" "}
                      — {pillar.stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}