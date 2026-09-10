"use client";

import { motion } from "framer-motion";
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
    <section id="governance" className="bg-charcoal px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
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
            className="max-w-lg font-body text-base leading-relaxed text-stone/70 sm:text-lg"
          >
            {governanceIntro}
          </motion.p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-3 lg:mt-20">
          {governancePillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-6 bg-charcoal p-8"
            >
              <span className="font-display text-sm text-ochre">
                {pillar.number}
              </span>
              <h3 className="font-display text-xl text-white">
                {pillar.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-stone/65">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
