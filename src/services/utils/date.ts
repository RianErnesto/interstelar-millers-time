export const GetDateDifferenceInMilliseconds = (date1: Date, date2: Date) => {
  return date1.getTime() - date2.getTime()
}

export const GetDateDifferenceInSeconds = (date1: Date, date2: Date) => {
  return GetDateDifferenceInMilliseconds(date1, date2) / 1000
}

export const GetDateDifferenceInMinutes = (date1: Date, date2: Date) => {
  return GetDateDifferenceInSeconds(date1, date2) / 60
}

export const GetDateDifferenceInHours = (date1: Date, date2: Date) => {
  return GetDateDifferenceInMinutes(date1, date2) / 60
}

export const GetDateDifferenceInDays = (date1: Date, date2: Date) => {
  return GetDateDifferenceInHours(date1, date2) / 24
}

export const GetDateDifferenceInMonths = (date1: Date, date2: Date) => {
  return GetDateDifferenceInDays(date1, date2) / 30
}

export const GetDateDifferenceInYears = (date1: Date, date2: Date) => {
  return GetDateDifferenceInMonths(date1, date2) / 12
}

export const GetDateDifferenceInWeeks = (date1: Date, date2: Date) => {
  return GetDateDifferenceInDays(date1, date2) / 7
}

export const GetDateDifferenceInDecades = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 10
}

export const GetDateDifferenceInCenturies = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 100
}

export const GetDateDifferenceInMillennia = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 1000
}

export const GetDateDifferenceInEons = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 1000000000
}

export const GetDateDifferenceInAges = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 1000000000000
}

export const GetDateDifferenceInEpochs = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 1000000000000000
}

export const GetDateDifferenceInEras = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 1000000000000000000
}

export const GetDateDifferenceInPeriods = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 1000000000000000000000
}

export const GetDateDifferenceInEternities = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 1000000000000000000000000
}

export const GetDateDifferenceInForever = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / Infinity
}

export const GetDateDifferenceInPlanckTimes = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 5.39116e-44
}

export const GetDateDifferenceInPlanckLengths = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 1.616229e-35
}

export const GetDateDifferenceInPlanckMasses = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 2.176434e-8
}

export const GetDateDifferenceInPlanckTemperatures = (
  date1: Date,
  date2: Date,
) => {
  return GetDateDifferenceInYears(date1, date2) / 1.416785e32
}

export const GetDateDifferenceInPlanckCharges = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 1.87554595641e18
}

export const GetDateDifferenceInPlanckAngles = (date1: Date, date2: Date) => {
  return GetDateDifferenceInYears(date1, date2) / 5.061452e31
}
