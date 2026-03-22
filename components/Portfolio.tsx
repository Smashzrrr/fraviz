'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Clock } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface PortfolioProps {
  dict: any;
}

export default function Portfolio({ dict }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-cta/10 text-cta border border-cta/20 uppercase mb-4">
            {dict.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)]">
            {dict.title}
          </h2>
          <p className="text-muted mt-2">{dict.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Real projects */}
          {dict.projects.map((project: any, i: number) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-surface/30 overflow-hidden hover:border-cta/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cta/5 transition-all duration-300"
            >
              {/* Gradient header */}
              <div className="h-40 bg-gradient-to-br from-cta/10 to-accent/10 flex items-center justify-center relative">
                <span className="text-4xl font-black font-[family-name:var(--font-poppins)] text-foreground/20 group-hover:text-foreground/30 transition-colors">
                  {project.title}
                </span>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-cta" />
                </div>
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-cta/10 text-cta mb-2">
                  {project.tag}
                </span>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {project.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-cta group-hover:text-cta-dark transition-colors">
                  {dict.visit}
                  <ExternalLink className="ml-1 w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}

          {/* Coming soon placeholders */}
          {[1, 2].map((i) => (
            <motion.div
              key={`placeholder-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (dict.projects.length + i) * 0.1 }}
              className="rounded-2xl border border-dashed border-border/60 bg-surface/10 flex flex-col items-center justify-center min-h-[280px] text-center p-6"
            >
              <Clock className="w-8 h-8 text-muted-dark mb-3" />
              <span className="text-sm text-muted-dark font-medium">{dict.coming_soon}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
