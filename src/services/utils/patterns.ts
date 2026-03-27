import { getDateDifferenceInDays } from './date'

export type MillerTime = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export type SplittedDate = {
  day: number
  month: number
  year: number
}

const MILLER_SECONDS_PER_EARTH_DAY = 1.25
const SECONDS_PER_MINUTE = 60
const MINUTES_PER_HOUR = 60
const HOURS_PER_DAY = 24

export const getTimeSince = (date: Date): MillerTime => {
  const earthDays = getDateDifferenceInDays(new Date(), date)
  const totalMillerSeconds = earthDays * MILLER_SECONDS_PER_EARTH_DAY

  const seconds = Math.floor(totalMillerSeconds % SECONDS_PER_MINUTE)
  const minutes = Math.floor(
    (totalMillerSeconds / SECONDS_PER_MINUTE) % MINUTES_PER_HOUR,
  )
  const hours = Math.floor(
    (totalMillerSeconds / (SECONDS_PER_MINUTE * MINUTES_PER_HOUR)) %
      HOURS_PER_DAY,
  )
  const days = Math.floor(
    totalMillerSeconds /
      (SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY),
  )

  return { days, hours, minutes, seconds }
}

export const getSplittedDate = (date: Date): SplittedDate => ({
  day: date.getDate(),
  month: date.getMonth() + 1,
  year: date.getFullYear(),
})

export const formatNumber = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`
}
