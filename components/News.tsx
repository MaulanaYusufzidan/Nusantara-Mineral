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
    <section id="news" className="bg-charcoal px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-3xl text-white sm:text-4xl lg:text-5xl"
        >
          {newsHeading}
        </motion.h2>

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
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="mt-5 flex items-center gap-3 font-body text-xs tracking-wide text-stone/55 uppercase">
                <span className="text-ochre">{article.category}</span>
                <span aria-hidden="true">·</span>
                <time>{article.date}</time>
              </div>

              <h3 className="mt-3 font-display text-lg leading-snug text-white sm:text-xl">
                {article.title}
              </h3>

              <span className="mt-4 inline-flex items-center gap-2 font-body text-sm text-stone/80">
                Read more
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
