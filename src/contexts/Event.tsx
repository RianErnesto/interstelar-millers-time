'use client'

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { events, EventType } from '@/constants/events'
import { Locale } from '@/app/[lang]/i18n'

type EventContextType = {
  event: EventType
  availableEvents: EventType[]
  lang: Locale
  resetEvent: () => void
  changeEvent: (name: string) => void
  setLang: (lang: Locale) => void
}

const EventContext = createContext<EventContextType | null>(null)

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Locale>('en')
  const [event, setEvent] = useState<EventType>(events.en[0])

  const resetEvent = useCallback(() => {
    setEvent(events[lang][0])
  }, [lang])

  const changeEvent = useCallback(
    (name: string) => {
      const found = events[lang].find((e) => e.name === name)
      if (found) setEvent(found)
    },
    [lang],
  )

  useEffect(() => {
    resetEvent()
  }, [resetEvent])

  const availableEvents = useMemo(() => events[lang], [lang])

  const value = useMemo(
    () => ({ event, availableEvents, lang, resetEvent, changeEvent, setLang }),
    [event, availableEvents, lang, resetEvent, changeEvent],
  )

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>
}

export const useEvent = (initialLang?: Locale) => {
  const context = useContext(EventContext)

  if (!context) {
    throw new Error('useEvent must be used within an EventProvider')
  }

  useEffect(() => {
    if (initialLang) {
      context.setLang(initialLang)
    }
  }, [initialLang, context])

  return context
}
