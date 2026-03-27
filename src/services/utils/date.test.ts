import { describe, it, expect } from 'vitest'
import {
  getDateDifferenceInMilliseconds,
  getDateDifferenceInSeconds,
  getDateDifferenceInMinutes,
  getDateDifferenceInHours,
  getDateDifferenceInDays,
} from './date'

describe('date utils', () => {
  const date1 = new Date(2024, 0, 2) // Jan 2
  const date2 = new Date(2024, 0, 1) // Jan 1

  it('calculates difference in milliseconds', () => {
    expect(getDateDifferenceInMilliseconds(date1, date2)).toBe(86_400_000)
  })

  it('calculates difference in seconds', () => {
    expect(getDateDifferenceInSeconds(date1, date2)).toBe(86_400)
  })

  it('calculates difference in minutes', () => {
    expect(getDateDifferenceInMinutes(date1, date2)).toBe(1440)
  })

  it('calculates difference in hours', () => {
    expect(getDateDifferenceInHours(date1, date2)).toBe(24)
  })

  it('calculates difference in days', () => {
    expect(getDateDifferenceInDays(date1, date2)).toBe(1)
  })

  it('returns negative for reversed dates', () => {
    expect(getDateDifferenceInDays(date2, date1)).toBe(-1)
  })

  it('returns 0 for same dates', () => {
    expect(getDateDifferenceInDays(date1, date1)).toBe(0)
  })
})
