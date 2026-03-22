import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FooterProps {
  dict: any;
  navDict: any;
  locale: Locale;
}

export default function Footer({ dict, navDict, locale }: FooterProps) {
  const navLinks = [
    { label: navDict.about, href: '#about-fraviz' },
    { label: navDict.services, href: '#services' },
    { label: navDict.results, href: '#results' },
    { label: navDict.blog, href: `/${locale}/blog` },
    { label: navDict.contact, href: '#contact' },
  ];

  return (
    <footer className="border-t border-border bg-surface/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href={`/${locale}`} className="text-xl font-black tracking-tight font-[family-name:var(--font-poppins)] text-cta">
              FRAVIZ
            </Link>
            <p className="text-xs text-muted">{dict.copyright}</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + email */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${dict.email}`}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-cta hover:border-cta/30 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/fraviz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-cta hover:border-cta/30 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
