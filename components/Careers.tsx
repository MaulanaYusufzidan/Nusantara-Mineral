"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Careers() {
  return (
    <section
      id="careers"
      className="relative flex min-h-[75vh] items-center overflow-hidden bg-charcoal px-6 py-28 lg:px-10"
    >
      {/* Background Seamless Image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/Latest News.jpg"
          alt="Careers at Nusantara Mineral"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-45 brightness-90 contrast-105"
        />

        {/* Seamless Radial & Vertical Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-transparent to-charcoal" />

        {/* Ambient Glow Elements */}
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-ochre/10 blur-3xl" />
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-moss/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-xl">
          {/* Eyebrow Tag */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-ochre backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
            <span>Karir & Karakter</span>
          </div>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-3xl text-white sm:text-4xl lg:text-5xl"
          >
            Build your future with us.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-5 font-body text-base leading-relaxed text-stone/80 sm:text-lg"
          >
            We&apos;re looking for people who want to do serious work on hard
            problems — across engineering, operations, sustainability and
            corporate teams, in the field and at head office.
          </motion.p>

          <motion.a
            href="#careers"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-body text-sm font-medium text-charcoal transition-all duration-300 hover:bg-ochre hover:text-white"
          >
            Explore Careers
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}