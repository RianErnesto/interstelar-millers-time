import { describe, it, expect } from 'vitest'
import { events, getEventsForLocale } from './events'

describe('events', () => {
  it('has same number of events for both locales', () => {
    expect(events.en.length).toBe(events.pt.length)
  })

  it('each event has a name and a valid date', () => {
    for (const event of events.en) {
      expect(event.name).toBeTruthy()
      expect(event.date).toBeInstanceOf(Date)
      expect(event.date.getTime()).not.toBeNaN()
    }
  })

  it('en and pt events share the same dates', () => {
    events.en.forEach((enEvent, i) => {
      expect(enEvent.date.getTime()).toBe(events.pt[i].date.getTime())
    })
  })

  it('getEventsForLocale returns localized names', () => {
    const enEvents = getEventsForLocale('en')
    const ptEvents = getEventsForLocale('pt')

    expect(enEvents[0].name).toBe('Interstellar Premiere')
    expect(ptEvents[0].name).toBe('Lançamento do Interstellar')
  })

  it('first event is Interstellar premiere (Oct 26, 2014)', () => {
    const premiere = events.en[0]
    expect(premiere.date.getFullYear()).toBe(2014)
    expect(premiere.date.getMonth()).toBe(9) // October (0-indexed)
    expect(premiere.date.getDate()).toBe(26)
  })
})
