"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function CTA() {
  return (
    <section id="contact" className="relative bg-charcoal px-4 py-12 sm:px-8 lg:px-12">
      {/* Container Utamanya Berbentuk Oval Halus (Subtle Oval / Stadium Shape) */}
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-moss px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28
                      rounded-[2.5rem] sm:rounded-[3.5rem] lg:rounded-[4.5rem]">
        
        {/* Subtle Ambient Glow & Pattern Accent */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
          
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Together, we can shape a more sustainable future.
          </motion.h2>

          <motion.a
            href="mailto:contact@nusantaramineral.co.id"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-body text-sm font-medium text-moss-deep transition-all duration-300 hover:bg-stone hover:shadow-lg"
          >
            Get in Touch
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