"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function CTA() {
  return (
    <section id="contact" className="bg-moss px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
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
          className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-body text-sm font-medium text-moss-deep transition-colors hover:bg-stone"
        >
          Get in Touch
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </motion.a>
      </div>
    </section>
  );
}
