'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/Select'
import { getSplittedDate, formatNumber } from '@/services/utils/patterns'
import { useEvent } from '@/contexts/Event'
import { LangType } from '@/types/lang'
import Button from '@/components/atoms/Button'
import { motion } from 'framer-motion'

const EventSelector = ({ phrases }: { phrases: LangType }) => {
  const { changeEvent, event, availableEvents, resetEvent } = useEvent()

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="flex w-1/3 min-w-fit gap-2"
    >
      <Button onClick={resetEvent}>{phrases.resetButton}</Button>
      <Select
        value={event.name}
        onValueChange={(value: string) => changeEvent(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder={phrases.selectEvent} />
        </SelectTrigger>
        <SelectContent className="max-sm:max-w-[20rem]">
          {availableEvents.map((evt, index) => {
            const { day, month, year } = getSplittedDate(evt.date)
            return (
              <SelectItem key={index} value={evt.name}>
                {evt.name} - {formatNumber(day)}/{formatNumber(month)}/
                {formatNumber(year)}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </motion.div>
  )
}

export default EventSelector
