import Hero from '@/components/Hero';
import AboutFraviz from '@/components/AboutFraviz';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Portfolio from '@/components/Portfolio';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getDictionary, type Locale } from '@/lib/i18n';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <main>
        <Hero dict={dict.hero} />
        <AboutFraviz dict={dict.aboutFraviz} />
        <About dict={dict.about} />
        <Services dict={dict.services} />
        <CaseStudies dict={dict.caseStudies} />
        <Portfolio dict={dict.portfolio} />
        <SocialProof dict={dict.testimonials} />
        <FAQ dict={dict.faq} />
        <Contact dict={dict.contact} locale={locale} />
      </main>
      <Footer dict={dict.footer} navDict={dict.nav} locale={locale} />
    </>
  );
}
