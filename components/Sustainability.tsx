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
    <section id="sustainability" className="bg-stone px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:col-span-2 lg:sticky lg:top-28 lg:aspect-auto lg:h-[36rem]"
          >
            <Image
              src="/images/sustainability-placeholder.svg"
              alt="Abstract illustration of forest canopy reclaiming rehabilitated mining terrain"
              fill
              unoptimized
              className="object-cover"
            />
          </motion.div>

          <div className="lg:col-span-3">
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-xl font-display text-3xl leading-tight text-charcoal sm:text-4xl lg:text-5xl"
            >
              {sustainabilityHeading}
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="mt-6 max-w-lg font-body text-base leading-relaxed text-charcoal-soft sm:text-lg"
            >
              {sustainabilityIntro}
            </motion.p>

            <div className="mt-14 divide-y divide-charcoal/10 border-t border-charcoal/10">
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
                  <h3 className="font-display text-xl text-moss">
                    {pillar.title}
                  </h3>
                  <div>
                    <p className="font-body text-sm leading-relaxed text-charcoal-soft sm:text-base">
                      {pillar.description}
                    </p>
                    <p className="mt-3 font-body text-sm text-ochre">
                      <span className="font-display text-base">
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
