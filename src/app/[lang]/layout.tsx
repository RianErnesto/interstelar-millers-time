import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/services/utils/className'
import { EventProvider } from '@/contexts/Event'
import { MusicProvider } from '@/contexts/Music'
import BackgroundSwitch from '@/components/organisms/BackgroundSwitch'
import MusicPlayer from '@/components/molecules/MusicPlayer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Locale } from './i18n'

const SITE_URL = 'https://interstellar.rianernesto.com.br'

const seoContent: Record<
  Locale,
  { title: string; description: string; keywords: string; ogLocale: string }
> = {
  en: {
    title: "Miller's Time — Gravitational Time Dilation",
    description:
      "Experience gravitational time dilation — see how time passes on Miller's planet near Gargantua, inspired by Interstellar.",
    keywords:
      "interstellar, miller's planet, time dilation, gargantua, black hole, gravitational time, christopher nolan, hans zimmer",
    ogLocale: 'en_US',
  },
  pt: {
    title: "Miller's Time — Dilatação Temporal Gravitacional",
    description:
      'Experimente a dilatação temporal gravitacional — veja como o tempo passa no planeta Miller perto de Gargantua, inspirado em Interstellar.',
    keywords:
      'interstellar, planeta miller, dilatação temporal, gargantua, buraco negro, tempo gravitacional, christopher nolan, hans zimmer',
    ogLocale: 'pt_BR',
  },
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const lang = (params.lang === 'pt' ? 'pt' : 'en') as Locale
  const seo = seoContent[lang]
  const alternateLang = lang === 'en' ? 'pt' : 'en'

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        pt: '/pt',
        'x-default': '/en',
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${lang}`,
      siteName: "Miller's Time",
      locale: seo.ogLocale,
      alternateLocale: seoContent[alternateLang].ogLocale,
      type: 'website',
      images: [
        {
          url: '/images/black-hole-orbiting planet.png',
          width: 1200,
          height: 630,
          alt: "Gargantua black hole with Miller's planet orbiting",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/images/black-hole-orbiting planet.png'],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icons/favicon.svg', type: 'image/svg+xml' },
        { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      ],
      apple: '/icons/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
    themeColor: '#D4A04A',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

type Props = {
  params: {
    lang: 'en' | 'pt'
  }
  children: React.ReactNode
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang}>
      <body
        className={cn(
          'overflow-hidden bg-void',
          inter.variable,
          jetbrainsMono.variable,
        )}
      >
        <BackgroundSwitch />
        <div className="pointer-events-none absolute inset-0 bg-black/60" />
        {/* Star particles layer */}
        <div
          className="pointer-events-none absolute inset-0 animate-twinkle"
          style={{
            backgroundImage: [
              'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.3), transparent)',
              'radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.2), transparent)',
              'radial-gradient(1px 1px at 50% 60%, rgba(255,255,255,0.15), transparent)',
              'radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.2), transparent)',
              'radial-gradient(1px 1px at 90% 50%, rgba(255,255,255,0.15), transparent)',
              'radial-gradient(1.5px 1.5px at 30% 70%, rgba(212,160,74,0.4), transparent)',
              'radial-gradient(1px 1px at 60% 90%, rgba(255,255,255,0.2), transparent)',
              'radial-gradient(1.5px 1.5px at 75% 35%, rgba(212,160,74,0.3), transparent)',
            ].join(', '),
          }}
        />
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(212,160,74,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 h-screen w-full overflow-y-scroll">
          <MusicProvider>
            <EventProvider>{children}</EventProvider>
            <MusicPlayer />
          </MusicProvider>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
