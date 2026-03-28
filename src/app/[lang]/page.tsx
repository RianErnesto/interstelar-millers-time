import EventSelector from '@/components/molecules/EventSelector'
import Testimonials from '@/components/molecules/Testimonials'
import TimeView from '@/components/molecules/TimeView'
import { getDictionary, sanitizeLocale } from './i18n'
import Footer from '@/components/organisms/Footer'

type Props = {
  params: {
    lang: string
  }
}

export default async function Home({ params: { lang } }: Props) {
  const locale = sanitizeLocale(lang)
  const intl = await getDictionary(locale)

  return (
    <main className="relative z-10 mx-auto flex max-w-[1280px] flex-col justify-between gap-4 pb-24 pt-10">
      <TimeView phases={intl} lang={locale} />
      <div className="flex w-full flex-col gap-4 max-[1320px]:px-2">
        <div className="flex w-full justify-end">
          <EventSelector phrases={intl} />
        </div>
        <Testimonials phrases={intl} lang={locale} />
        <div className="mt-8 flex w-full flex-wrap justify-center gap-16 md:justify-between">
          <Footer phrases={intl} />
        </div>
      </div>
    </main>
  )
}
