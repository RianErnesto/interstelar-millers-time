'use client'

import Tick from '@/components/atoms/Tick'
import Info from '@/components/atoms/Info'
import { LangType } from '@/types/lang'
import {
  formatNumber,
  getSplittedDate,
  getTimeSince,
} from '@/services/utils/patterns'
import { useEvent } from '@/contexts/Event'
import { Locale } from '@/app/[lang]/i18n'
import { motion } from 'framer-motion'

const TimeView = ({ phases, lang }: { phases: LangType; lang: Locale }) => {
  const { event } = useEvent(lang)
  const { days, hours, minutes, seconds } = getTimeSince(event.date)
  const { day, month, year } = getSplittedDate(event.date)

  const timeUnits = [
    ...(days > 0 ? [{ value: days, label: phases.timeUnitDays }] : []),
    { value: hours, label: phases.timeUnitHours },
    { value: minutes, label: phases.timeUnitMinutes },
    { value: seconds, label: phases.timeUnitSeconds },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-amber-gold/10 px-6 py-12"
      style={{ background: 'rgba(13,17,23,0.85)' }}
    >
      {/* Radial glow from top */}
      <div
        className="pointer-events-none absolute -top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(circle, rgba(212,160,74,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Top amber glow line */}
      <div
        className="absolute left-1/2 top-0 h-px w-3/5 -translate-x-1/2"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(212,160,74,0.5), transparent)',
        }}
      />

      {/* Tick icon with tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Tick tooltip={phases.dayOnEarthInfo} />
      </motion.div>

      {/* Time display */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="z-10 flex flex-wrap items-center justify-center gap-3"
      >
        {timeUnits.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3">
            {i > 0 && (
              <span className="animate-blink font-mono text-3xl font-bold text-amber-gold/30 sm:text-4xl">
                :
              </span>
            )}
            <div className="flex min-w-[64px] flex-col items-center gap-2 sm:min-w-[90px]">
              <span
                className="font-mono text-4xl font-bold leading-none sm:text-5xl md:text-6xl"
                style={{
                  background:
                    'linear-gradient(180deg, #ffffff 30%, rgba(212,160,74,0.6) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {formatNumber(unit.value)}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[3px] text-amber-gold/60">
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Event text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="z-10 flex items-center gap-1 text-center text-sm text-white/50"
      >
        <span>
          {phases.timeSince}{' '}
          <strong className="font-medium text-amber-gold/70">
            {event.name}
          </strong>{' '}
          — {formatNumber(day)}/{formatNumber(month)}/{formatNumber(year)}
        </span>
        <Info>{phases.hourOnMillerInfo}</Info>
      </motion.div>
    </motion.div>
  )
}

export default TimeView
