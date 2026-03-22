'use client';

import { motion } from 'framer-motion';
import { Brain, Cog, Database, Globe, MessageSquare, Workflow } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ServicesProps {
  dict: any;
}

const serviceIcons = [Brain, Cog, Database, Globe, MessageSquare, Workflow];
const serviceGradients = [
  'from-blue-500/10 to-indigo-500/5',
  'from-amber-500/10 to-orange-500/5',
  'from-emerald-500/10 to-teal-500/5',
  'from-violet-500/10 to-purple-500/5',
  'from-rose-500/10 to-pink-500/5',
  'from-cyan-500/10 to-blue-500/5',
];
const serviceIconColors = [
  'text-blue-400',
  'text-amber-400',
  'text-emerald-400',
  'text-violet-400',
  'text-rose-400',
  'text-cyan-400',
];

export default function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-cta/10 text-cta border border-cta/20 uppercase mb-4">
            {dict.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)]">
            {dict.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dict.items.map((service: any, i: number) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative p-6 rounded-2xl border border-border bg-gradient-to-br ${serviceGradients[i]} hover:border-cta/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cta/5 transition-all duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl bg-surface/60 flex items-center justify-center mb-4 ${serviceIconColors[i]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-cta hover:text-cta-dark transition-colors"
                >
                  {service.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
