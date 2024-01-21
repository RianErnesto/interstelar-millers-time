'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { events, EventType } from '@/constants/events'
import { Locale } from '@/app/[lang]/i18n'

type EventContextType = {
  event: EventType
  setEvent: Dispatch<SetStateAction<EventType>>
  resetEvent: () => void
  changeEvent: (name: string) => void
  setLang: Dispatch<SetStateAction<'en' | 'pt'>>
  lang: Locale
}

const EventContext = createContext<EventContextType>({} as EventContextType)

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [event, setEvent] = useState<EventType>(events.en[0])
  const [lang, setLang] = useState<Locale>('en' as Locale)

  const resetEvent = () => setEvent(events[lang][0])

  const changeEvent = (name: string) => {
    const newEvent = events[lang].find((event) => event.name === name)
    if (newEvent) setEvent(newEvent)
  }

  const value = {
    event,
    setEvent,
    resetEvent,
    changeEvent,
    setLang,
    lang,
  }

  useEffect(() => {
    resetEvent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>
}

export const useEvent = (lang?: Locale) => {
  const context = useContext<EventContextType>(EventContext)

  if (context === undefined)
    throw new Error('useEvent must be used within a EventProvider')

  if (lang) {
    context.setLang(() => lang)
  }

  return context
}
