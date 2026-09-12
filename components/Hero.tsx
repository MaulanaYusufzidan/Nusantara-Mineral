"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal sm:items-center"
    >
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/Hero.jpg"
          alt="Aerial view of a mining terrace with distant ridgelines and industrial structures at dusk"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-40 sm:pb-32 lg:px-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-body text-sm tracking-[0.18em] text-ochre uppercase"
          >
            Building a better future
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-5 font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            Transforming Resources Into Sustainable Progress
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-lg font-body text-base text-stone/80 sm:text-lg"
          >
            We responsibly develop mineral resources across Indonesia,
            turning what the earth provides into lasting value for
            communities, partners and generations to come.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-body text-sm font-medium text-charcoal transition-colors hover:bg-stone"
            >
              Discover Our Company
            </a>
            <a
              href="#operations"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 font-body text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Explore Our Operations
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.8 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
