import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, act } from '@testing-library/react'
import Tick from '.'

describe('Tick', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders with initial opacity 0', () => {
    const { container } = render(<Tick />)
    const span = container.querySelector('span')!

    expect(span).toBeInTheDocument()
    expect(span.style.opacity).toBe('0')
  })

  it('toggles opacity every 1.25 seconds', () => {
    const { container } = render(<Tick />)
    const span = container.querySelector('span')!

    expect(span.style.opacity).toBe('0')

    act(() => vi.advanceTimersByTime(1250))
    expect(span.style.opacity).toBe('1')

    act(() => vi.advanceTimersByTime(1250))
    expect(span.style.opacity).toBe('0')
  })

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval')
    const { unmount } = render(<Tick />)

    unmount()

    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })
})
