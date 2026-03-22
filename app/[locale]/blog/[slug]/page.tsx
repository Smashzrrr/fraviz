import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { type Locale, locales } from '@/lib/i18n';

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  content: string;
};

const posts: Record<string, BlogPost> = {
  'zasto-ai-automatizacija-nije-samo-za-velike-firme': {
    slug: 'zasto-ai-automatizacija-nije-samo-za-velike-firme',
    title: 'Zašto AI automatizacija nije samo za velike firme',
    date: '2026-03-10',
    readTime: '5 min',
    tag: 'AI Strategija',
    content: `Kad čujete "AI automatizacija", vjerojatno pomislite na velike korporacije s odjelima od 50+ developera i budžetima u milijunima. Ali realnost u 2026. je potpuno drugačija.

Danas, zahvaljujući no-code i low-code alatima te AI modelima poput Claude i ChatGPT, čak i najmanji biznisi mogu automatizirati ključne procese — za djelić troška tradicionalnog developmenta.

## Primjer iz prakse

Jedna mala consulting firma od 5 ljudi trošila je 15+ sati tjedno na ručno sortiranje emailova, unos podataka u spreadsheetove i slanje follow-up poruka. S jednim AI workflowom, cijeli taj proces je automatiziran.

Rezultat? 15 sati tjedno oslobođeno za rad koji stvarno donosi prihod.

## Što trebate za početak?

Ne trebate znati programirati. Ne trebate veliki budžet. Trebate samo jasnu sliku o tome koji procesi troše najviše vremena — a da pritom ne zahtijevaju kreativno razmišljanje.

Repetitivni taskovi su idealni kandidati za automatizaciju:
- Procesiranje emailova i sortiranje po kategorijama
- Unos podataka iz jednog sustava u drugi
- Generiranje izvještaja iz više izvora
- Slanje automatiziranih odgovora i follow-up poruka
- Praćenje i obavještavanje o promjenama na webu

## Zaključak

AI automatizacija nije luksuz — to je competitive advantage koji si danas može priuštiti svaki biznis. Pitanje nije možete li si to priuštiti, nego možete li si priuštiti da to ne radite.

Za besplatan konzultacijski poziv o mogućnostima automatizacije, javite se putem kontakt forme.`,
  },
  '5-procesa-koje-mozete-automatizirati-danas': {
    slug: '5-procesa-koje-mozete-automatizirati-danas',
    title: '5 procesa koje možete automatizirati danas',
    date: '2026-03-05',
    readTime: '7 min',
    tag: 'Automatizacija',
    content: `Automatizacija ne mora biti komplicirana. Evo 5 poslovnih procesa koje možete automatizirati — bez ikakvog programiranja, koristeći dostupne no-code alate.

## 1. Email triage i kategorizacija

Umjesto ručnog čitanja i sortiranja svakog emaila, AI može automatski kategorizirati dolazne poruke (hitno, upit, spam, zakazivanje) i proslijediti ih u pravi kanal ili odgovoriti automatski.

## 2. Data entry iz dokumenata

Fakture, ponude, narudžbe — AI može izvući ključne podatke iz PDF-ova i slika i unijeti ih direktno u spreadsheet ili CRM.

## 3. Social media monitoring

Automatsko praćenje spomena branda, konkurencije ili ključnih pojmova na LinkedInu, Twitteru i web portalima. Obavijest stiže kad se nešto važno dogodi.

## 4. Generiranje izvještaja

Umjesto tjednog ručnog sastavljanja izvještaja iz više izvora, automatizirani workflow može povući podatke, formatirati izvještaj i poslati ga timu na email.

## 5. Lead enrichment i outreach

Kad stigne novi lead, automatski se pronalaze dodatne informacije (LinkedIn profil, firma, pozicija) i šalje personalizirani follow-up email — sve bez ručnog rada.

## Kako početi?

Odaberite jedan proces koji troši najviše vremena. Javite se putem kontakt forme — u jednom pozivu identificirat će se optimalno rješenje za vaš slučaj. Besplatno, bez obaveza.`,
  },
  'kako-sam-scrapao-1000-kontakata-u-sat-vremena': {
    slug: 'kako-sam-scrapao-1000-kontakata-u-sat-vremena',
    title: 'Kako je prikupljeno 1.000 kontakata u sat vremena',
    date: '2026-02-28',
    readTime: '6 min',
    tag: 'Web Scraping',
    content: `Klijentu je trebalo 1.000+ kontakata za B2B outreach kampanju. Ručno bi to trajalo minimalno 2 tjedna. S pravim alatima, posao je obavljen u sat vremena. Evo kako.

## Definiranje cilja

Prije početka scrapanja važno je točno znati što se traži:
- Koji tip tvrtki? (industrija, veličina, lokacija)
- Koji podaci su potrebni? (email, telefon, kontakt osoba, web stranica)
- Iz kojih izvora? (poslovni registri, LinkedIn, web stranice)

## Alati koji su korišteni

Za ovaj projekt korištena je kombinacija **Apify** platforme za cloud scraping, **Antigravity** za orkestraciju i čišćenje podataka, te **Google Sheets** za finalni strukturirani output.

## Proces

Cijeli proces bio je jednostavan: definirana je ciljana industrija i geografsko područje, postavljen Apify actor za scraping poslovnih registara, pokrenut crawling koji automatski prolazi kroz stranice i izvlači podatke, a zatim Antigravity procesira raw podatke — deduplikacija, validacija emailova, strukturiranje. Čisti podaci automatski se upisuju u Google Sheets.

## Rezultat

1.000+ kontakata s validnim email adresama, strukturirano u tablicu s imenom tvrtke, kontakt osobom, emailom, telefonom i web stranicom. Ukupno vrijeme: oko 1 sat uključujući setup. Ručno bi to trajalo 80+ sati, odnosno više od 2 tjedna rada.

## Zaključak

Data extraction je jedan od najkonkretnijih primjera gdje AI i automatizacija donose instant ROI. Za potrebe outreacha, istraživanja tržišta ili lead generacije — to se može riješiti u satima, ne tjednima.`,
  },
};

const allSlugs = Object.keys(posts);

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    allSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const post = posts[slug];
  if (!post) return { title: 'Post not found' };

  return {
    title: post.title,
    description: post.content.substring(0, 155) + '...',
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 155) + '...',
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const post = posts[slug];
  if (!post) notFound();

  const isEn = locale === 'en';
  const otherPosts = allSlugs.filter((s) => s !== slug).map((s) => posts[s]);

  return (
    <main className="pt-16 pb-16 min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-cta transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {isEn ? 'Back to blog' : 'Natrag na blog'}
        </Link>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cta/10 text-cta border border-cta/20 mb-4">
            {post.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(isEn ? 'en-US' : 'hr-HR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span className="w-1 h-1 rounded-full bg-muted-dark" />
            <span>{post.readTime} {isEn ? 'read' : 'čitanja'}</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={i} className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-foreground mt-12 mb-6">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n').filter((line) => line.startsWith('- '));
              return (
                <ul key={i} className="space-y-2 my-6">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-cta mt-2.5 flex-shrink-0" />
                      <span>{item.replace('- ', '')}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={i} className="text-muted leading-relaxed my-4">
                {parts.map((part, j) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return (
                      <strong key={j} className="text-foreground font-medium">
                        {part.slice(2, -2)}
                      </strong>
                    );
                  }
                  return <span key={j}>{part}</span>;
                })}
              </p>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-surface/40 border border-border text-center">
          <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-3">
            {isEn ? 'Want to learn more?' : 'Želite saznati više?'}
          </h3>
          <p className="text-muted mb-6">
            {isEn
              ? 'Schedule a free consultation call and let\'s discuss your project.'
              : 'Zakažite besplatni konzultacijski poziv i razgovarajmo o vašem projektu.'}
          </p>
          <Link
            href={`/${locale}#contact`}
            className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold bg-cta text-background hover:bg-cta-dark transition-all duration-200 shadow-lg shadow-cta-glow"
          >
            {isEn ? 'Send Inquiry' : 'Pošaljite upit'}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-6">
            {isEn ? 'Other articles' : 'Ostali članci'}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherPosts.map((op) => (
              <Link
                key={op.slug}
                href={`/${locale}/blog/${op.slug}`}
                className="group p-5 rounded-xl bg-surface/30 border border-border hover:border-cta/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-cta/10 text-cta mb-2">
                  {op.tag}
                </span>
                <h4 className="text-sm font-medium text-foreground group-hover:text-cta transition-colors line-clamp-2">
                  {op.title}
                </h4>
                <div className="text-xs text-muted mt-2">{op.readTime} {isEn ? 'read' : 'čitanja'}</div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
