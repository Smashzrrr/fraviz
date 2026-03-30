'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NeonButton } from '@/components/ui/neon-button';
import type { Locale } from '@/lib/i18n';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface NavbarProps {
  dict: any;
  locale: Locale;
}

const HrFlag = () => (
  <img src="/cro_flag.png" alt="Croatia Flag" className="w-5 h-5 rounded-[4px] object-cover flex-shrink-0" />
);

const EnFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5 rounded-[4px] object-cover flex-shrink-0">
    <path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/><path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L22 480H0v-25l240-154zM640 0v3L391 191l-2-21L620 0h20zM0 0l239 176h-60L0 42V0z"/><path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/><path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
  </svg>
);

const LanguageDropdown = ({ locale, mobileAlign = false }: { locale: Locale; mobileAlign?: boolean }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideLang = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    if (isLangOpen) document.addEventListener('mousedown', handleClickOutsideLang);
    return () => document.removeEventListener('mousedown', handleClickOutsideLang);
  }, [isLangOpen]);

  return (
    <div className="relative" ref={langRef}>
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center gap-2 text-xs font-bold tracking-wider text-muted hover:text-foreground transition-colors px-2.5 py-1.5 rounded-lg border border-border hover:border-cta/30 bg-surface/40 hover:bg-surface/60"
      >
        {locale === 'hr' ? <HrFlag /> : <EnFlag />}
        {locale.toUpperCase()}
        <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isLangOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-full mt-2 w-36 bg-[#0a0a0f] border border-border rounded-xl shadow-2xl overflow-hidden py-1 z-50 ${mobileAlign ? 'right-0' : 'left-0 text-left'}`}
          >
            <Link
              href="/hr"
              onClick={() => setIsLangOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium hover:bg-surface transition-colors ${locale === 'hr' ? 'text-cta bg-cta/5' : 'text-muted hover:text-foreground'}`}
            >
              <HrFlag /> Hrvatski
            </Link>
            <Link
              href="/en"
              onClick={() => setIsLangOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium hover:bg-surface transition-colors ${locale === 'en' ? 'text-cta bg-cta/5' : 'text-muted hover:text-foreground'}`}
            >
              <EnFlag /> English
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar({ dict, locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { label: dict.about, href: '#about-fraviz' },
    { label: dict.services, href: '#services' },
    { label: dict.results, href: '#results' },
    { label: dict.blog, href: `/${locale}/blog` },
    { label: dict.contact, href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}
        className={`
          transition-all duration-300
          ${scrolled
            ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
            : 'bg-background/60 backdrop-blur-lg border-b border-white/5'
          }
        `}
      >
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a 
              href={`/${locale}`}
              onClick={(e) => {
                e.preventDefault();
                const path = window.location.pathname;
                if (path === `/${locale}` || path === `/${locale}/` || path === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.pushState(null, '', `/${locale}`);
                } else {
                  router.push(`/${locale}`);
                }
              }}
              className="flex-shrink-0 cursor-pointer"
            >
              <span className="text-xl font-black tracking-tight font-[family-name:var(--font-poppins)] text-cta">
                FRAVIZ
              </span>
            </a>

            {/* Desktop Nav — centered */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Right — Language Switcher + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageDropdown locale={locale} mobileAlign={false} />
              <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                <NeonButton size="sm">{dict.cta}</NeonButton>
              </Link>
            </div>

            {/* Mobile: Language + Hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <LanguageDropdown locale={locale} mobileAlign={true} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground p-1"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-border bg-[#0a0a0f]/95 backdrop-blur-xl"
            >
              <nav className="px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="block py-3 text-base font-medium text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-4">
                  <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                    <NeonButton className="w-full">{dict.cta}</NeonButton>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}
