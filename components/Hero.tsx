'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ElegantShape } from '@/components/ui/shape-landing-hero';
import { ChevronDown } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface HeroProps {
  dict: any;
}

function formatNumber(n: number): string {
  if (n >= 1000) {
    return n.toLocaleString('de-DE');
  }
  return n.toString();
}

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return (
    <div ref={ref} className="text-[1.75rem] leading-[1.1] min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] text-foreground tracking-tighter break-words">
      {formatNumber(count)}{suffix}
    </div>
  );
}

export default function Hero({ dict }: HeroProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: 10, suffix: '+', label: dict.stat1_label },
    { value: 1000, suffix: '+', label: dict.stat2_label },
    { value: 10000, suffix: '€+', label: dict.stat3_label },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Layered animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute top-[10%] left-[5%] w-[700px] h-[700px] rounded-full opacity-25 blur-[140px]"
          style={{
            background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[5%] right-[0%] w-[600px] h-[600px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite 2s',
          }}
        />
        <div
          className="absolute top-[40%] left-[40%] w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)',
            animation: 'pulse-glow 6s ease-in-out infinite 1s',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'grid-pulse 4s ease-in-out infinite',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-10"
          style={{
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Elegant floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape delay={0.2} width={550} height={130} rotate={12} gradient="from-primary/[0.12]" className="left-[-8%] top-[18%]" />
        <ElegantShape delay={0.4} width={420} height={100} rotate={-14} gradient="from-cta/[0.10]" className="right-[-4%] top-[65%]" />
        <ElegantShape delay={0.3} width={260} height={70} rotate={-7} gradient="from-accent/[0.12]" className="left-[8%] bottom-[12%]" />
        <ElegantShape delay={0.55} width={180} height={55} rotate={22} gradient="from-cta/[0.08]" className="right-[18%] top-[12%]" />
        <ElegantShape delay={0.7} width={130} height={38} rotate={-20} gradient="from-primary/[0.10]" className="left-[28%] top-[8%]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-[family-name:var(--font-poppins)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
        >
          {dict.title1} {dict.title2}{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-cta bg-clip-text text-transparent">
            {dict.title3}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10"
        >
          {dict.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="inline-flex items-center px-8 py-4 rounded-lg text-base font-semibold bg-cta text-background hover:bg-cta-dark transition-all duration-300 shadow-xl shadow-cta-glow hover:shadow-cta/50 hover:-translate-y-0.5"
          >
            {dict.cta_primary}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#results"
            onClick={(e) => scrollToSection(e, '#results')}
            className="inline-flex items-center px-8 py-4 rounded-lg text-base font-semibold border border-border text-foreground hover:bg-surface transition-all duration-300 hover:-translate-y-0.5"
          >
            {dict.cta_secondary}
          </a>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <CountUp target={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-muted-dark" />
        </motion.div>
      </motion.div>
    </section>
  );
}
