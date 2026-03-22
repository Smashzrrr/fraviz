'use client';

import { motion } from 'framer-motion';
import { X, Sparkles, CheckCircle } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface CaseStudiesProps {
  dict: any;
}

export default function CaseStudies({ dict }: CaseStudiesProps) {
  return (
    <section id="results" className="py-16 sm:py-20 bg-surface/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-cta/10 text-cta border border-cta/20 uppercase mb-4">
            {dict.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)]">
            {dict.title}
          </h2>
          <p className="text-muted mt-2">{dict.subtitle}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </motion.div>

        {/* Featured case study — first one large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border bg-surface/30 overflow-hidden mb-6"
        >
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cta/10 text-cta border border-cta/20 mb-4">
                {dict.cases[0].tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-poppins)] text-foreground mb-6">
                {dict.cases[0].title}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-red-400 tracking-wider">{dict.cases[0].problem_label}</span>
                    <p className="text-sm text-muted mt-1">{dict.cases[0].problem}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-amber-400 tracking-wider">{dict.cases[0].solution_label}</span>
                    <p className="text-sm text-muted mt-1">{dict.cases[0].solution}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 tracking-wider">{dict.cases[0].result_label}</span>
                    <p className="text-sm text-foreground font-medium mt-1">{dict.cases[0].result}</p>
                    {dict.cases[0].note && <p className="text-xs text-muted mt-0.5">{dict.cases[0].note}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 flex items-center justify-center p-8 bg-primary/5">
              <div className="text-center">
                <div className="text-[2.5rem] leading-[1] min-[400px]:text-5xl sm:text-6xl lg:text-7xl font-black font-[family-name:var(--font-poppins)] text-primary/80 tracking-tighter break-words">
                  {dict.cases[0].metric_value}
                </div>
                <div className="text-sm text-muted mt-2">{dict.cases[0].metric_label}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two smaller cases */}
        <div className="grid sm:grid-cols-2 gap-6">
          {dict.cases.slice(1).map((cs: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-border bg-surface/30 overflow-hidden"
            >
              <div className="p-6 flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cta/10 text-cta border border-cta/20 mb-3">
                    {cs.tag}
                  </span>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-poppins)] text-foreground mb-4">
                    {cs.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted">{cs.problem}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted">{cs.solution}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-foreground font-medium">{cs.result}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:min-w-[140px]">
                  <div className="text-center">
                    <div className="text-[1.75rem] leading-[1.1] min-[400px]:text-3xl lg:text-4xl font-black font-[family-name:var(--font-poppins)] text-cta tracking-tighter break-words">
                      {cs.metric_value}
                    </div>
                    <div className="text-xs text-muted mt-1">{cs.metric_label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
