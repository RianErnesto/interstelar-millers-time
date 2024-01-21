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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-md py-10"
    >
      <div className="absolute inset-0 bg-gray-900 opacity-35" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="z-10 flex items-center gap-4"
      >
        <div className="relative">
          <span className="absolute -left-5 -top-2 z-10">
            <Info>{phases.dayOnEarthInfo}</Info>
          </span>
          <Tick />
        </div>
        <div className="relative text-6xl font-bold">
          {days > 0 && <span>{days}d - </span>}
          <span>{formatNumber(hours)}</span>:
          <span>{formatNumber(minutes)}</span>:
          <span>{formatNumber(seconds)}</span>
          <span className="absolute -right-5 -top-2 z-30">
            <Info>{phases.hourOnMillerInfo}</Info>
          </span>
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="z-10 text-xl"
      >
        {phases.timeSince} {event.name} - {formatNumber(day)}/
        {formatNumber(month)}/{formatNumber(year)}
      </motion.span>
    </motion.div>
  )
}

export default TimeView
