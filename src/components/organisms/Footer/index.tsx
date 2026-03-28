'use client'

import DevelopedBy from '@/components/atoms/DevelopedBy'
import Donations from '@/components/molecules/Donations'
import LanguageSelector from '@/components/molecules/LanguageSelector'
import { LangType } from '@/types/lang'
import { Locale } from '@/app/[lang]/i18n'
import { motion } from 'framer-motion'

const Footer = ({ phrases, lang }: { phrases: LangType; lang: Locale }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="flex w-full min-w-[13.625rem] max-w-96 flex-1 flex-col gap-4"
    >
      <LanguageSelector phrases={phrases} lang={lang} />
      <Donations phrases={phrases} />
      <DevelopedBy phrases={phrases} />
    </motion.div>
  )
}

export default Footer
