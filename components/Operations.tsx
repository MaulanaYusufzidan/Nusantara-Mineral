"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { operations, operationsIntro } from "@/data/operations";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Operations() {
  return (
    <section id="operations" className="bg-charcoal px-6 py-28 lg:px-10 lg:py-36">
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
            Our Operations
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="max-w-lg font-body text-base leading-relaxed text-stone/70 sm:text-lg"
          >
            {operationsIntro}
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {operations.map((op, i) => (
            <motion.a
              key={op.slug}
              href="#sustainability"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-sm bg-charcoal-soft"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={op.image}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl text-white">
                    {op.title}
                  </h3>
                  <ArrowUpRight
                    className="mt-1 h-5 w-5 shrink-0 text-ochre transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="font-body text-sm leading-relaxed text-stone/65">
                  {op.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
