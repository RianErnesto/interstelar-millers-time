'use client'

import { IoPlanet } from 'react-icons/io5'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import { useTestimonials } from '@/hooks/useTestimonials'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { LangType } from '@/types/lang'
import { Locale } from '@/app/[lang]/i18n'
import { cn } from '@/services/utils/className'
import { useCallback } from 'react'

const DOT_DISPLAY_MAX = 7
const SWIPE_THRESHOLD = 50

const Testimonials = ({
  lang,
  phrases,
}: {
  phrases: LangType
  lang: Locale
}) => {
  const { quote, index, total, goTo, next, previous } = useTestimonials(lang)

  const dotStart = Math.max(
    0,
    Math.min(index - Math.floor(DOT_DISPLAY_MAX / 2), total - DOT_DISPLAY_MAX),
  )
  const dots = Array.from(
    { length: Math.min(DOT_DISPLAY_MAX, total) },
    (_, i) => dotStart + i,
  )

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.x < -SWIPE_THRESHOLD) {
        next()
      } else if (info.offset.x > SWIPE_THRESHOLD) {
        previous()
      }
    },
    [next, previous],
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex min-h-80 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/5 px-6 py-12 md:px-16"
      style={{ background: 'rgba(13,17,23,0.75)' }}
    >
      {/* Title */}
      <div className="mb-7 flex items-center gap-2.5">
        <span className="flex h-6 w-6 items-center justify-center rounded bg-amber-gold/15 text-amber-gold">
          <IoPlanet size={16} />
        </span>
        <span className="text-[13px] font-medium uppercase tracking-[3px] text-amber-gold/60">
          {phrases.testimonialsTitle}
        </span>
      </div>

      {/* Decorative quote mark */}
      <span
        className="-mb-3 select-none text-7xl leading-none text-amber-gold/20"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        &ldquo;
      </span>

      {/* Quote with crossfade + swipe */}
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.3}
          onDragEnd={handleDragEnd}
          className="max-w-[700px] cursor-grab text-center text-base font-normal italic leading-relaxed text-white/85 active:cursor-grabbing md:text-xl"
        >
          {quote.quote}
        </motion.p>
      </AnimatePresence>

      {/* Author */}
      <AnimatePresence mode="wait">
        <motion.span
          key={`author-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-5 flex items-center gap-2.5 text-sm font-medium tracking-[1px] text-amber-gold/60"
        >
          <span className="inline-block h-px w-6 bg-amber-gold/40" />
          {quote.author}
        </motion.span>
      </AnimatePresence>

      {/* Navigation: arrows + dots */}
      <div className="mt-7 flex items-center gap-4">
        {/* Left arrow — desktop only */}
        <button
          onClick={previous}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/30 transition-all hover:bg-amber-gold/10 hover:text-amber-gold"
        >
          <MdArrowLeft size={24} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {dots.map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => goTo(dotIndex)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                dotIndex === index
                  ? 'w-5 bg-amber-gold shadow-[0_0_8px_rgba(212,160,74,0.4)]'
                  : 'w-1.5 bg-white/15 hover:bg-white/30',
              )}
            />
          ))}
        </div>

        {/* Right arrow — desktop only */}
        <button
          onClick={next}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/30 transition-all hover:bg-amber-gold/10 hover:text-amber-gold"
        >
          <MdArrowRight size={24} />
        </button>
      </div>
    </motion.div>
  )
}

export default Testimonials
