import dynamic from 'next/dynamic'
import EventSelector from '@/components/molecules/EventSelector'
import TimeView from '@/components/molecules/TimeView'
import { getDictionary, Locale, sanitizeLocale } from './i18n'
import Footer from '@/components/organisms/Footer'

const Testimonials = dynamic(
  () => import('@/components/molecules/Testimonials'),
  { ssr: false },
)

const SITE_URL = 'https://interstellar.rianernesto.com.br'

type Props = {
  params: {
    lang: string
  }
}

function JsonLd({ lang }: { lang: Locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: "Miller's Time",
    url: `${SITE_URL}/${lang}`,
    description:
      lang === 'pt'
        ? 'Experimente a dilatação temporal gravitacional — veja como o tempo passa no planeta Miller perto de Gargantua, inspirado em Interstellar.'
        : "Experience gravitational time dilation — see how time passes on Miller's planet near Gargantua, inspired by Interstellar.",
    applicationCategory: 'Entertainment',
    inLanguage: lang === 'pt' ? 'pt-BR' : 'en-US',
    author: {
      '@type': 'Person',
      name: 'Rian Ernesto',
      url: 'https://github.com/RianErnesto',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function Home({ params: { lang } }: Props) {
  const locale = sanitizeLocale(lang)
  const intl = await getDictionary(locale)

  return (
    <>
      <JsonLd lang={locale} />
      <main className="relative z-10 mx-auto flex max-w-[1280px] flex-col justify-between gap-4 pb-24 pt-10">
        <TimeView phases={intl} lang={locale} />
        <div className="flex w-full flex-col gap-4 max-[1320px]:px-2">
          <div className="flex w-full justify-end">
            <EventSelector phrases={intl} />
          </div>
          <Testimonials phrases={intl} lang={locale} />
          <div className="mt-8 flex w-full flex-wrap justify-center gap-16 md:justify-between">
            <Footer phrases={intl} lang={locale} />
          </div>
        </div>
      </main>
    </>
  )
}
