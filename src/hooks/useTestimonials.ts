import { Locale } from '@/app/[lang]/i18n'
import { quotes } from '@/constants/quotes'
import { useState, useEffect } from 'react'

export const useTestimonials = (lang: Locale) => {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((index + 1) % quotes[lang].length)
  }

  const previous = () => {
    setIndex((index - 1 + quotes[lang].length) % quotes[lang].length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % quotes[lang].length)
    }, 10000)
    return () => clearInterval(interval)
  }, [index, lang])

  return {
    index,
    next,
    previous,
    quote: quotes[lang][index],
  }
}
