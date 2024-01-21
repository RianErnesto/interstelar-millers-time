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
    <main className="relative z-10 mx-auto flex max-w-screen-xl flex-col justify-between gap-4 py-10">
      <TimeView phases={intl} lang={lang} />
      <div className="flex justify-end">
        <EventSelector phrases={intl} />
      </div>
      <Testimonials phrases={intl} lang={lang} />
      <div className="mt-8 flex w-full justify-between gap-16">
        <MusicPlayer phrases={intl} />
        <Footer phrases={intl} />
      </div>
    </main>
  )
}
