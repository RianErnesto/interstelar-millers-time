export type EventType = {
  name: string
  date: Date
}

export const events: { [key: string]: EventType[] } = {
  en: [
    {
      name: 'Interstellar Premiere',
      date: new Date(2014, 9, 26),
    },
    {
      name: 'Declaration of Independence of the United States',
      date: new Date(1776, 6, 4),
    },
    {
      name: 'French Revolution',
      date: new Date(1789, 6, 14),
    },
    {
      name: 'Publication of "On the Origin of Species" by Charles Darwin',
      date: new Date(1859, 10, 24),
    },
    {
      name: 'World War I',
      date: new Date(1914, 6, 28),
    },
    {
      name: 'Russian Revolution',
      date: new Date(1917, 9, 25),
    },
    {
      name: 'World War II',
      date: new Date(1939, 8, 1),
    },
    {
      name: 'Independence of India',
      date: new Date(1947, 7, 15),
    },
    {
      name: 'Launch of Sputnik 1',
      date: new Date(1957, 9, 4),
    },
    {
      name: 'Moon Landing',
      date: new Date(1969, 6, 20),
    },
    {
      name: 'Fall of the Berlin Wall',
      date: new Date(1989, 10, 9),
    },
    {
      name: 'Emergence of the World Wide Web',
      date: new Date(1991, 7, 6),
    },
    {
      name: 'September 11 Attacks',
      date: new Date(2001, 8, 11),
    },
    {
      name: 'Paris Climate Agreement',
      date: new Date(2015, 10, 30),
    },
  ],
  pt: [
    {
      name: 'Lançamento do Interstellar',
      date: new Date(2014, 9, 26),
    },
    {
      name: 'Declaração de Independência dos Estados Unidos',
      date: new Date(1776, 6, 4),
    },
    {
      name: 'Revolução Francesa',
      date: new Date(1789, 6, 14),
    },
    {
      name: "Publicação de 'Sobre a Origem das Espécies' por Charles Darwin",
      date: new Date(1859, 10, 24),
    },
    {
      name: 'Primeira Guerra Mundial',
      date: new Date(1914, 6, 28),
    },
    {
      name: 'Revolução Russa',
      date: new Date(1917, 9, 25),
    },
    {
      name: 'Segunda Guerra Mundial',
      date: new Date(1939, 8, 1),
    },
    {
      name: 'Independência da Índia',
      date: new Date(1947, 7, 15),
    },
    {
      name: 'Lançamento do Sputnik 1',
      date: new Date(1957, 9, 4),
    },
    {
      name: 'Pouso na Lua',
      date: new Date(1969, 6, 20),
    },
    {
      name: 'Queda do Muro de Berlim',
      date: new Date(1989, 10, 9),
    },
    {
      name: 'Emergência da World Wide Web',
      date: new Date(1991, 7, 6),
    },
    {
      name: 'Ataques de 11 de setembro',
      date: new Date(2001, 8, 11),
    },
    {
      name: 'Acordo Climático de Paris',
      date: new Date(2015, 10, 30),
    },
  ],
}
