import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import { getDictionary, type Locale, locales } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.meta.title,
      template: "%s | FRAVIZ",
    },
    description: dict.meta.description,
    keywords: [
      "AI automatizacija",
      "AI automation",
      "web scraping",
      "konzalting",
      "consulting",
      "automatizacija procesa",
      "process automation",
      "Hrvatska",
      "Croatia",
    ],
    authors: [{ name: "Fraviz" }],
    alternates: {
      canonical: `https://fraviz.vercel.app/${locale}`,
      languages: {
        hr: "https://fraviz.vercel.app/hr",
        en: "https://fraviz.vercel.app/en",
      },
    },
    openGraph: {
      title: dict.meta.og_title,
      description: dict.meta.og_description,
      url: `https://fraviz.vercel.app/${locale}`,
      siteName: "FRAVIZ",
      locale: locale === "hr" ? "hr_HR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.og_title,
      description: dict.meta.og_description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className="dark">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <Navbar dict={dict.nav} locale={locale} />
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
