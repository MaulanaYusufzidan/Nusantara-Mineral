"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { newsArticles, newsHeading } from "@/data/news";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function News() {
  return (
    <section id="news" className="relative overflow-hidden bg-charcoal px-6 py-28 lg:px-10 lg:py-36">
      {/* Background Container Seamless */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Background Image dengan Filter Tone Warna yang Diselaraskan */}
        <Image
          src="/images/Latest news.jpg"
          alt="News Background"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-50 brightness-90 contrast-110 saturate-60"
        />

        {/* Gradien Blend Vertikal: Memudar dari Charcoal di Atas dan Bawah agar Seamless */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/60 to-charcoal" />

        {/* Subtle Glow & Grid Accent */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-moss/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-ochre/5 blur-3xl" />
        
        <div
          className="absolute inset-0 opacity-[0.03]"
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
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-charcoal/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-ochre backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
            <span>Pers & Media</span>
          </div>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-3xl font-bold text-white drop-shadow-md sm:text-4xl lg:text-5xl"
          >
            {newsHeading}
          </motion.h2>
        </div>

        {/* News Cards Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {newsArticles.map((article, i) => (
            <motion.a
              key={article.slug}
              href="#news"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col rounded-sm border border-white/15 bg-charcoal-soft/80 p-4 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-charcoal-soft/95"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex items-center gap-3 font-body text-xs uppercase tracking-wide text-stone/70">
                <span className="font-semibold text-ochre">{article.category}</span>
                <span aria-hidden="true">·</span>
                <time>{article.date}</time>
              </div>

              <h3 className="mt-3 font-display text-lg leading-snug text-white transition-colors duration-200 group-hover:text-ochre sm:text-xl">
                {article.title}
              </h3>

              <div className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-stone/90 transition-colors duration-200 group-hover:text-white">
                  Read more
                  <ArrowRight
                    className="h-4 w-4 text-ochre transition-transform duration-300 ease-out group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}