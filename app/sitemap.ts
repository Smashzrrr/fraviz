import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fraviz.vercel.app';
  const locales = ['hr', 'en'];

  const blogSlugs = [
    'zasto-ai-automatizacija-nije-samo-za-velike-firme',
    '5-procesa-koje-mozete-automatizirati-danas',
    'kako-sam-scrapao-1000-kontakata-u-sat-vremena',
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Main pages per locale
  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          hr: `${baseUrl}/hr`,
          en: `${baseUrl}/en`,
        },
      },
    });

    entries.push({
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    for (const slug of blogSlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
