"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  governanceHeading,
  governanceIntro,
  governancePillars,
} from "@/data/governance";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Governance() {
  return (
    <section id="governance" className="relative overflow-hidden bg-charcoal px-6 py-28 lg:px-10 lg:py-36">
      {/* Background Seamless Container */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Latar Gambar Operasional */}
        <Image
          src="/images/Latest news.jpg"
          alt="Governance Background"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-40 brightness-90 contrast-110"
        />

        {/* Gradien Blend: Memudar Halus dari Charcoal di Atas, Transparan di Tengah, dan Charcoal di Bawah */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/50 to-charcoal" />

        {/* Subtle Ambient Glow */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-moss/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-ochre/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-3xl text-white sm:text-4xl lg:text-5xl"
          >
            {governanceHeading}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="max-w-lg font-body text-base leading-relaxed text-stone/80 sm:text-lg"
          >
            {governanceIntro}
          </motion.p>
        </div>

        {/* Grid Pillars dengan Glassmorphism Agar Tekstur Gambar Belakang Tetap Mengalir */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-3 lg:mt-20">
          {governancePillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-6 bg-charcoal/85 p-8 backdrop-blur-md transition-colors duration-300 hover:bg-charcoal/95"
            >
              <span className="font-display text-sm font-semibold text-ochre">
                {pillar.number}
              </span>
              <h3 className="font-display text-xl text-white">
                {pillar.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-stone/75">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}