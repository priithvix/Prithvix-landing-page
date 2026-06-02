import 'server-only';

export type Locale = 'en' | 'hi' | 'gu';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  hi: () => import('../dictionaries/hi.json').then((module) => module.default),
  gu: () => import('../dictionaries/gu.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    return dictionaries.en();
  }
  return dictionaries[locale]();
};
