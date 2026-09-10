"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { investorItems, investorsHeading, investorsIntro } from "@/data/investors";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Investors() {
  return (
    <section id="investors" className="bg-stone px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-3xl text-charcoal sm:text-4xl lg:text-5xl"
          >
            {investorsHeading}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="max-w-lg font-body text-base leading-relaxed text-charcoal-soft sm:text-lg"
          >
            {investorsIntro}
          </motion.p>
        </div>

        <div className="mt-16 border-t border-charcoal/10 lg:mt-20">
          {investorItems.map((item, i) => (
            <motion.a
              key={item.title}
              href="#investors"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group flex items-center justify-between gap-6 border-b border-charcoal/10 py-7 transition-colors hover:border-charcoal/30"
            >
              <div>
                <h3 className="font-display text-lg text-charcoal sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 font-body text-sm text-charcoal-soft">
                  {item.description}
                </p>
              </div>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-ochre transition-transform duration-300 ease-out group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
