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
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-charcoal px-6 py-28 lg:px-10"
    >
      <Image
        src="/images/careers-placeholder.svg"
        alt=""
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-xl">
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
            className="mt-5 font-body text-base leading-relaxed text-stone/75 sm:text-lg"
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
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-body text-sm font-medium text-charcoal transition-colors hover:bg-stone"
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
