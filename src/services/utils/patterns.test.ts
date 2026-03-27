import { describe, it, expect, vi, afterEach } from 'vitest'
import { getTimeSince, getSplittedDate, formatNumber } from './patterns'

describe('getTimeSince', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns zeroed time for the current date', () => {
    const now = new Date()
    const result = getTimeSince(now)

    expect(result.days).toBe(0)
    expect(result.hours).toBe(0)
    expect(result.minutes).toBe(0)
    expect(result.seconds).toBe(0)
  })

  it('converts earth days to miller time correctly', () => {
    // 1 earth day = 1.25 miller seconds
    // 48 earth days = 60 miller seconds = 1 miller minute
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2024, 0, 49)) // 48 days after Jan 1

    const result = getTimeSince(new Date(2024, 0, 1))

    expect(result.minutes).toBe(1)
    expect(result.seconds).toBe(0)
  })

  it('wraps seconds at 60', () => {
    vi.useFakeTimers()
    // 59 earth days = 73.75 miller seconds = 1min 13sec
    vi.setSystemTime(new Date(2024, 0, 60))

    const result = getTimeSince(new Date(2024, 0, 1))

    expect(result.seconds).toBeLessThan(60)
  })

  it('returns all positive values for a past date', () => {
    const pastDate = new Date(2014, 9, 26) // Interstellar premiere
    const result = getTimeSince(pastDate)

    expect(result.days).toBeGreaterThanOrEqual(0)
    expect(result.hours).toBeGreaterThanOrEqual(0)
    expect(result.minutes).toBeGreaterThanOrEqual(0)
    expect(result.seconds).toBeGreaterThanOrEqual(0)
  })
})

describe('getSplittedDate', () => {
  it('splits a date into day, month, year', () => {
    const date = new Date(2024, 2, 15) // March 15, 2024
    const result = getSplittedDate(date)

    expect(result).toEqual({ day: 15, month: 3, year: 2024 })
  })

  it('returns 1-indexed month', () => {
    const january = new Date(2024, 0, 1)
    expect(getSplittedDate(january).month).toBe(1)
  })
})

describe('formatNumber', () => {
  it('pads single digit with leading zero', () => {
    expect(formatNumber(0)).toBe('00')
    expect(formatNumber(5)).toBe('05')
    expect(formatNumber(9)).toBe('09')
  })

  it('returns double digits as-is', () => {
    expect(formatNumber(10)).toBe('10')
    expect(formatNumber(42)).toBe('42')
    expect(formatNumber(99)).toBe('99')
  })
})
