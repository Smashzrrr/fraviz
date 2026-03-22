'use client';

import { motion } from 'framer-motion';
import { Zap, FileText, Globe, Coins } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface AboutProps {
  dict: any;
}

const tools = ['Claude Code', 'Claude', 'Antigravity', 'Manus', 'Apify', 'Next.js'];

const statIcons = [
  { icon: Zap, color: 'text-cta' },
  { icon: FileText, color: 'text-cta' },
  { icon: Globe, color: 'text-cta' },
  { icon: Coins, color: 'text-cta' },
];

export default function About({ dict }: AboutProps) {
  const stats = [
    { value: dict.stat1_value, label: dict.stat1_label, ...statIcons[0] },
    { value: dict.stat2_value, label: dict.stat2_label, ...statIcons[1] },
    { value: dict.stat3_value, label: dict.stat3_label, ...statIcons[2] },
    { value: dict.stat4_value, label: dict.stat4_label, ...statIcons[3] },
  ];

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)]">
            {dict.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cta to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-6">
              {dict.headline}
            </h3>
            <p className="text-muted leading-relaxed mb-4">{dict.p1}</p>
            <p className="text-muted leading-relaxed mb-8">{dict.p2}</p>

            {/* Tools badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs text-muted-dark flex items-center gap-2">
                <span className="w-8 h-px bg-border" />
                {dict.tools_label}
              </span>
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-surface/40 text-muted hover:text-foreground hover:border-cta/30 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-border bg-surface/30 hover:border-cta/20 transition-colors"
              >
                <stat.icon className={`w-6 h-6 ${stat.color} mb-3`} />
                <div className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
