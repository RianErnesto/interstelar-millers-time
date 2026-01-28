import EventSelector from '@/components/molecules/EventSelector'
import MusicPlayer from '@/components/molecules/MusicPlayer'
import Testimonials from '@/components/molecules/Testimonials'
import TimeView from '@/components/molecules/TimeView'
import { Locale, getDictionary } from './i18n'
import Footer from '@/components/organisms/Footer'

type Props = {
  params: {
    lang: Locale
  }
}

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang)

  return (
    <main className="relative z-10 mx-auto flex max-w-[1280px] flex-col justify-between gap-4 py-10">
      <TimeView phases={intl} lang={lang} />
      <div className="flex w-full flex-col gap-4 max-[1320px]:px-2">
        <div className="flex w-full justify-end">
          <EventSelector phrases={intl} />
        </div>
        <Testimonials phrases={intl} lang={lang} />
        <div className="mt-8 flex w-full flex-wrap justify-center gap-16 md:justify-between">
          <MusicPlayer phrases={intl} />
          <Footer phrases={intl} />
        </div>
      </div>
    </main>
  )
}
