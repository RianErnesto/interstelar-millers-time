export const DateToMilliseconds = (date: Date) => {
  return date.getTime()
}

export const MillisecondsToHours = (milliseconds: number) => {
  return milliseconds / 1000 / 60 / 60
}

export const HourToMilliseconds = (hour: number): number => {
  return hour * 60 * 60 * 1000
}

export const HourToSeconds = (hour: number): number => {
  return hour * 60 * 60
}

export const YearToHours = (year: number): number => {
  return year * 365 * 24
}

export const YearToSeconds = (year: number): number => {
  return HourToSeconds(YearToHours(year))
}

export const YearToMilliseconds = (year: number) => {
  return DateToMilliseconds(new Date(year, 0, 1))
}

export const MillisecondsToDate = (milliseconds: number) => {
  return new Date(milliseconds)
}

export const SecondsToMilliseconds = (seconds: number) => {
  return seconds * 1000
}

export const MillisecondsToYear = (milliseconds: number) => {
  return MillisecondsToDate(milliseconds).getFullYear()
}

export const DateToYear = (date: Date) => {
  return date.getFullYear()
}

export const YearToDate = (year: number) => {
  return new Date(year, 0, 1)
}

export const DateToMonth = (date: Date) => {
  return date.getMonth()
}

export const MonthToDate = (month: number) => {
  return new Date(0, month, 1)
}

export const DateToDay = (date: Date) => {
  return date.getDate()
}

export const DayToDate = (day: number) => {
  return new Date(0, 0, day)
}

export const DateToHour = (date: Date) => {
  return date.getHours()
}

export const HourToDate = (hour: number) => {
  return new Date(0, 0, 0, hour)
}

export const DateToMinute = (date: Date) => {
  return date.getMinutes()
}

export const MinuteToDate = (minute: number) => {
  return new Date(0, 0, 0, 0, minute)
}

export const DateToSecond = (date: Date) => {
  return date.getSeconds()
}

export const SecondToDate = (second: number) => {
  return new Date(0, 0, 0, 0, 0, second)
}
