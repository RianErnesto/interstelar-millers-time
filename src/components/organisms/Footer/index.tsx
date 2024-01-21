'use client'

import DevelopedBy from '@/components/atoms/DevelopedBy'
import Donations from '@/components/molecules/Donations'
import LanguageSelector from '@/components/molecules/LanguageSelector'
import { LangType } from '@/types/lang'
import { motion } from 'framer-motion'

const Footer = ({ phrases }: { phrases: LangType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="flex flex-1 flex-col gap-4"
    >
      <LanguageSelector phrases={phrases} />
      <Donations phrases={phrases} />
      <DevelopedBy phrases={phrases} />
    </motion.div>
  )
}

export default Footer
