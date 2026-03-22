'use client';

import { motion } from 'framer-motion';
import { BarChart3, Lightbulb, Rocket } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface AboutFravizProps {
  dict: any;
}

const milestoneIcons = [BarChart3, Lightbulb, Rocket];

export default function AboutFraviz({ dict }: AboutFravizProps) {
  const milestones = [dict.milestone1, dict.milestone2, dict.milestone3];

  return (
    <section id="about-fraviz" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-cta/10 text-cta border border-cta/20 uppercase mb-4">
            {dict.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] leading-tight whitespace-pre-line">
            {dict.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Text — 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-muted leading-relaxed">{dict.p1}</p>
            <p className="text-muted leading-relaxed">{dict.p2}</p>
            <p className="text-muted leading-relaxed">{dict.p3}</p>
          </motion.div>

          {/* Timeline — 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative pl-8 border-l-2 border-cta/20 space-y-8">
              {milestones.map((milestone, i) => {
                const Icon = milestoneIcons[i];
                return (
                  <div key={i} className="relative">
                    <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-cta/20 border-2 border-cta flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cta" />
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground font-medium">{milestone}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
