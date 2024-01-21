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
import Link from 'next/link'
import { LangType } from '@/types/lang'
import { useRouter } from 'next/navigation'

const LanguageSelector = ({ phrases }: { phrases: LangType }) => {
  const router = useRouter()

  const onValueChange = (value: string) => {
    router.push(value)
  }

  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={phrases.selectLanguage} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <Link
            href="/en"
            locale="en"
            className="flex w-full items-center gap-2"
          >
            English
            <Image src={USAFlag} height={12} alt="USA Flag" />
          </Link>
        </SelectItem>
        <SelectItem value="pt">
          <Link
            href="/pt"
            locale="pt"
            className="flex w-full items-center gap-2"
          >
            Português (Brasil)
            <Image src={BrazilFlag} height={12} alt="Brazil Flag" />
          </Link>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default LanguageSelector
