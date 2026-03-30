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
              className="group flex flex-col rounded-2xl border border-border bg-surface/30 overflow-hidden hover:border-cta/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cta/5 transition-all duration-300 h-full"
            >
              {/* Image header */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-surface to-surface-secondary flex items-center justify-center p-8">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm" />
                ) : (
                  <span className="text-4xl font-black font-[family-name:var(--font-poppins)] text-foreground/20 group-hover:text-foreground/30 transition-colors">
                    {project.title}
                  </span>
                )}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <ExternalLink className="w-4 h-4 text-cta" />
                </div>
                {/* Subtle gradient overlay to ensure text is readable if we want to place text, but we don't here */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-cta/10 text-cta mb-3 self-start">
                  {project.tag}
                </span>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-cta group-hover:text-cta-dark transition-colors mt-auto">
                  {dict.visit}
                  <ExternalLink className="ml-1.5 w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}

          {/* Coming soon placeholders (Dynamically limit to exactly 3 total cards max) */}
          {Array.from({ length: Math.max(0, 3 - dict.projects.length) }).map((_, i) => (
            <motion.div
              key={`placeholder-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (dict.projects.length + i) * 0.1 }}
              className="rounded-2xl border border-dashed border-border/60 bg-surface/10 flex flex-col items-center justify-center min-h-[350px] text-center p-6 h-full"
            >
              <Clock className="w-8 h-8 text-muted-dark mb-4 group-hover:text-cta transition-colors" />
              <span className="text-sm text-muted-dark font-medium">{dict.coming_soon}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
