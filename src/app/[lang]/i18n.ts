import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  pt: () => import('./dictionaries/pt.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

const locales = Object.keys(dictionaries) as Locale[]

export const isValidLocale = (value: string): value is Locale =>
  locales.includes(value as Locale)

export const sanitizeLocale = (value: string): Locale =>
  isValidLocale(value) ? value : 'en'

export const getDictionary = async (locale: Locale) => {
  const loader = dictionaries[locale] ?? dictionaries.en
  return loader()
}
