"use client";

import { motion } from "framer-motion";
import { aboutCopy, stats } from "@/data/about";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="bg-stone px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-3xl leading-tight text-charcoal sm:text-4xl lg:sticky lg:top-32 lg:text-5xl"
          >
            {aboutCopy.heading}
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="space-y-5"
          >
            {aboutCopy.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="font-body text-base leading-relaxed text-charcoal-soft sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-charcoal/10 pt-12 sm:grid-cols-4 lg:mt-28">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <p className="font-display text-3xl text-moss sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-sm text-charcoal-soft">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
