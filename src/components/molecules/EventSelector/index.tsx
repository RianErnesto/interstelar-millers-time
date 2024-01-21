'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/Select'
import { events } from '@/constants/events'
import { getSplittedDate, formatNumber } from '@/services/utils/patterns'
import { useEvent } from '@/contexts/Event'
import { LangType } from '@/types/lang'
import Button from '@/components/atoms/Button'
import { motion } from 'framer-motion'

const EventSelector = ({ phrases }: { phrases: LangType }) => {
  const { changeEvent, event, lang, resetEvent } = useEvent()

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="flex w-1/3 gap-2"
    >
      <Button onClick={resetEvent}>Reset</Button>
      <Select
        value={event.name}
        onValueChange={(value: string) => changeEvent(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder={phrases.selectEvent} />
        </SelectTrigger>
        <SelectContent>
          {events[lang].map((event, index) => (
            <SelectItem key={index} value={event.name}>
              {event.name} - {formatNumber(getSplittedDate(event.date).day)}/
              {formatNumber(getSplittedDate(event.date).month)}/
              {formatNumber(getSplittedDate(event.date).year)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </motion.div>
  )
}

export default EventSelector
