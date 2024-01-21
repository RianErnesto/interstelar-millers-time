'use client'

import { IoPlanet } from 'react-icons/io5'
import Image from 'next/image'
import InterstelarBanner from 'public/images/interstelar_banner.jpg'
import { useTestimonials } from '@/hooks/useTestimonials'
import { motion, AnimatePresence } from 'framer-motion'
import { MdArrowRight, MdArrowLeft } from 'react-icons/md'
import { LangType } from '@/types/lang'
import { Locale } from '@/app/[lang]/i18n'

const Testimonials = ({
  lang,
  phrases,
}: {
  phrases: LangType
  lang: Locale
}) => {
  const { quote, next, previous } = useTestimonials(lang)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        key="main"
        layout
        className="relative flex h-fit min-h-80 w-full flex-col justify-center overflow-hidden rounded-lg px-4 py-10 transition-all md:px-10 md:py-16"
      >
        <Image
          fill
          src={InterstelarBanner}
          alt="Interstelar Banner"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-purple-800">
            <IoPlanet size={24} />
          </span>{' '}
          <span className="text-xl font-semibold md:text-2xl">
            {phrases.testimonialsTitle}
          </span>
        </div>
        <motion.p
          key={'quote'}
          className="relative z-10 mt-7 text-base font-bold transition-all md:text-lg"
        >
          &quot;
          {quote.quote}
          &quot;
        </motion.p>
        <motion.span
          key={'author'}
          className="relative z-10 mt-3 transition-all"
        >
          {quote.author}
        </motion.span>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <button
            onClick={previous}
            className="transition-colors hover:opacity-80"
          >
            <MdArrowLeft size={32} />
          </button>
          <button onClick={next} className="transition-colors hover:opacity-80">
            <MdArrowRight size={32} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Testimonials
