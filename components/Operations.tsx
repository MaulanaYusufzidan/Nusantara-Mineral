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
    <section
      id="operations"
      className="relative overflow-hidden bg-charcoal px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Background Container */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Background Image - Dinaikkan ke opacity-80 agar jauh lebih terang */}
        <Image
          src="/images/Background-Operations.jpg"
          alt="Operations Background"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-80"
        />

        {/* Overlay Gelap Dipertipis (Transparan) */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/70" />

        {/* Moss green glow */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-moss/10 blur-3xl" />

        {/* Ochre glow */}
        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-ochre/5 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

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
            Our Operations
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
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
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-white/[0.06] bg-charcoal-soft/90 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={op.image}
                  alt={op.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
              </div>

              {/* Content */}
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