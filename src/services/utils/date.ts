export const getDateDifferenceInMilliseconds = (date1: Date, date2: Date) => {
  return date1.getTime() - date2.getTime()
}

export const getDateDifferenceInSeconds = (date1: Date, date2: Date) => {
  return getDateDifferenceInMilliseconds(date1, date2) / 1000
}

export const getDateDifferenceInMinutes = (date1: Date, date2: Date) => {
  return getDateDifferenceInSeconds(date1, date2) / 60
}

export const getDateDifferenceInHours = (date1: Date, date2: Date) => {
  return getDateDifferenceInMinutes(date1, date2) / 60
}

export const getDateDifferenceInDays = (date1: Date, date2: Date) => {
  return getDateDifferenceInHours(date1, date2) / 24
}
