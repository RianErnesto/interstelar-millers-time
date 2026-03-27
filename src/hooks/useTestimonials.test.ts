import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTestimonials } from './useTestimonials'
import { quotes } from '@/constants/quotes'

describe('useTestimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('starts at index 0', () => {
    const { result } = renderHook(() => useTestimonials('en'))

    expect(result.current.index).toBe(0)
    expect(result.current.quote).toEqual(quotes.en[0])
  })

  it('next() advances to the next quote', () => {
    const { result } = renderHook(() => useTestimonials('en'))

    act(() => result.current.next())

    expect(result.current.index).toBe(1)
    expect(result.current.quote).toEqual(quotes.en[1])
  })

  it('next() wraps around at the end', () => {
    const { result } = renderHook(() => useTestimonials('en'))

    // Go to last quote
    for (let i = 0; i < quotes.en.length; i++) {
      act(() => result.current.next())
    }

    expect(result.current.index).toBe(0)
  })

  it('previous() goes to the last quote from index 0', () => {
    const { result } = renderHook(() => useTestimonials('en'))

    act(() => result.current.previous())

    expect(result.current.index).toBe(quotes.en.length - 1)
  })

  it('auto-advances every 10 seconds', () => {
    const { result } = renderHook(() => useTestimonials('en'))

    expect(result.current.index).toBe(0)

    act(() => vi.advanceTimersByTime(10_000))
    expect(result.current.index).toBe(1)

    act(() => vi.advanceTimersByTime(10_000))
    expect(result.current.index).toBe(2)
  })

  it('works with pt locale', () => {
    const { result } = renderHook(() => useTestimonials('pt'))

    expect(result.current.quote).toEqual(quotes.pt[0])
  })
})
