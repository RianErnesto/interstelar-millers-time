import { Locale } from '@/app/[lang]/i18n'

export type EventType = {
  name: string
  date: Date
}

type EventDefinition = {
  date: Date
  name: Record<Locale, string>
}

const eventDefinitions: EventDefinition[] = [
  {
    date: new Date(2014, 9, 26),
    name: { en: 'Interstellar Premiere', pt: 'Lançamento do Interstellar' },
  },
  {
    date: new Date(1776, 6, 4),
    name: {
      en: 'Declaration of Independence of the United States',
      pt: 'Declaração de Independência dos Estados Unidos',
    },
  },
  {
    date: new Date(1789, 6, 14),
    name: { en: 'French Revolution', pt: 'Revolução Francesa' },
  },
  {
    date: new Date(1859, 10, 24),
    name: {
      en: 'Publication of "On the Origin of Species" by Charles Darwin',
      pt: "Publicação de 'Sobre a Origem das Espécies' por Charles Darwin",
    },
  },
  {
    date: new Date(1914, 6, 28),
    name: { en: 'World War I', pt: 'Primeira Guerra Mundial' },
  },
  {
    date: new Date(1917, 9, 25),
    name: { en: 'Russian Revolution', pt: 'Revolução Russa' },
  },
  {
    date: new Date(1939, 8, 1),
    name: { en: 'World War II', pt: 'Segunda Guerra Mundial' },
  },
  {
    date: new Date(1947, 7, 15),
    name: { en: 'Independence of India', pt: 'Independência da Índia' },
  },
  {
    date: new Date(1957, 9, 4),
    name: { en: 'Launch of Sputnik 1', pt: 'Lançamento do Sputnik 1' },
  },
  {
    date: new Date(1969, 6, 20),
    name: { en: 'Moon Landing', pt: 'Pouso na Lua' },
  },
  {
    date: new Date(1989, 10, 9),
    name: { en: 'Fall of the Berlin Wall', pt: 'Queda do Muro de Berlim' },
  },
  {
    date: new Date(1991, 7, 6),
    name: {
      en: 'Emergence of the World Wide Web',
      pt: 'Emergência da World Wide Web',
    },
  },
  {
    date: new Date(2001, 8, 11),
    name: { en: 'September 11 Attacks', pt: 'Ataques de 11 de setembro' },
  },
  {
    date: new Date(2015, 10, 30),
    name: { en: 'Paris Climate Agreement', pt: 'Acordo Climático de Paris' },
  },
]

export const getEventsForLocale = (locale: Locale): EventType[] =>
  eventDefinitions.map((def) => ({
    name: def.name[locale],
    date: def.date,
  }))

// Backward-compatible indexed access
export const events: Record<Locale, EventType[]> = {
  en: getEventsForLocale('en'),
  pt: getEventsForLocale('pt'),
}
