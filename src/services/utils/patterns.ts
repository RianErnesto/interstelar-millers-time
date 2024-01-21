import { GetDateDifferenceInDays } from './date'

type GetTimeSinceReturnType = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

type SplittedDateType = {
  day: number
  month: number
  year: number
}

export const getTimeSince = (date: Date): GetTimeSinceReturnType => {
  // 1 day on Earth is equal to 1.25 seconds on Miller
  const days = GetDateDifferenceInDays(new Date(), date)
  const secondsInMiller = (days * 1.25) % 60
  const minutesInMiller = ((days * 1.25) / 60) % 60
  const hoursInMiller = ((days * 1.25) / 60 / 60) % 24
  const daysInMiller = ((days * 1.25) / 60 / 60 / 24) % 365

  return {
    days: Math.floor(daysInMiller),
    hours: Math.floor(hoursInMiller),
    minutes: Math.floor(minutesInMiller),
    seconds: Math.floor(secondsInMiller),
  }
}

export const getSplittedDate = (date: Date): SplittedDateType => {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  }
}

export const formatNumber = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`
}
