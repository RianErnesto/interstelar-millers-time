import { Locale } from '@/app/[lang]/i18n'
import { quotes } from '@/constants/quotes'
import { useState, useEffect, useCallback } from 'react'

export const useTestimonials = (lang: Locale) => {
  const [index, setIndex] = useState(0)
  const total = quotes[lang].length

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % total)
  }, [total])

  const previous = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total)
    }, 10000)
    return () => clearInterval(interval)
  }, [total])

  return {
    index,
    next,
    previous,
    quote: quotes[lang][index],
  }
}
