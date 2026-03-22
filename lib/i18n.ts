export type Locale = 'hr' | 'en';

export const locales: Locale[] = ['hr', 'en'];
export const defaultLocale: Locale = 'hr';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: Record<Locale, () => Promise<any>> = {
  hr: () => import('@/dictionaries/hr.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
