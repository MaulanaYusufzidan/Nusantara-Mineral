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
    <section id="investors" className="relative w-full bg-charcoal py-6 lg:py-10">
      {/* Kontainer Utama: Full-width dengan lengkungan oval tipis di keempat sudutnya */}
      <div className="relative w-full overflow-hidden bg-stone px-6 py-20 sm:px-10 lg:px-16 lg:py-28
                      rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]">
        
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              {/* Optional: Tag Aksesori untuk konsistensi dengan section lain */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-charcoal/80 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
                <span>Informasi Investor</span>
              </motion.div>

              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl"
              >
                {investorsHeading}
              </motion.h2>
            </div>
            
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

          {/* List Item Investor */}
          <div className="mt-16 border-t border-charcoal/15 pt-4 lg:mt-20">
            {investorItems.map((item, i) => (
              <motion.a
                key={item.title}
                href="#investors"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="group flex items-center justify-between gap-6 border-b border-charcoal/10 py-7 transition-colors hover:border-charcoal/40 hover:bg-black/[0.02] px-4 -mx-4 rounded-lg"
              >
                <div>
                  <h3 className="font-display text-lg font-medium text-charcoal transition-colors duration-300 group-hover:text-ochre sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-charcoal-soft">
                    {item.description}
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal/5 transition-colors duration-300 group-hover:bg-ochre/10">
                  <ArrowRight
                    className="h-5 w-5 text-charcoal transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-ochre"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}