'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/Select'
import Image from 'next/image'
import BrazilFlag from 'public/images/brazil_flag.png'
import USAFlag from 'public/images/usa_flag.png'
import { LangType } from '@/types/lang'
import { Locale } from '@/app/[lang]/i18n'
import { useRouter } from 'next/navigation'

const LanguageSelector = ({
  phrases,
  lang,
}: {
  phrases: LangType
  lang: Locale
}) => {
  const router = useRouter()

  const onValueChange = (value: string) => {
    router.push(`/${value}`)
  }

  return (
    <Select value={lang} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={phrases.selectLanguage} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <span className="flex w-full items-center gap-2">
            English
            <Image src={USAFlag} height={12} alt="USA Flag" />
          </span>
        </SelectItem>
        <SelectItem value="pt">
          <span className="flex w-full items-center gap-2">
            Português (Brasil)
            <Image src={BrazilFlag} height={12} alt="Brazil Flag" />
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default LanguageSelector
