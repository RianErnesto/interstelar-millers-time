'use client'

import DevelopedBy from '@/components/atoms/DevelopedBy'
import Donations from '@/components/molecules/Donations'
import LanguageSelector from '@/components/molecules/LanguageSelector'
import { LangType } from '@/types/lang'
import { Locale } from '@/app/[lang]/i18n'

const Footer = ({ phrases, lang }: { phrases: LangType; lang: Locale }) => {
  return (
    <div
      className="flex w-full min-w-[13.625rem] max-w-96 flex-1 animate-slide-right flex-col gap-4"
      style={{ animationDelay: '1.4s' }}
    >
      <LanguageSelector phrases={phrases} lang={lang} />
      <Donations phrases={phrases} />
      <DevelopedBy phrases={phrases} />
    </div>
  )
}

export default Footer
