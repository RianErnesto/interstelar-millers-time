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

const EventSelector = ({ phrases }: { phrases: LangType }) => {
  const { changeEvent, event, availableEvents, resetEvent } = useEvent()

  return (
    <div
      className="flex w-1/3 min-w-fit animate-slide-right gap-2"
      style={{ animationDelay: '0.6s' }}
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
    </div>
  )
}

export default EventSelector
