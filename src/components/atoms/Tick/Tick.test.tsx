import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Tick from '.'

describe('Tick', () => {
  it('renders the planet icon with orbit-pulse animation', () => {
    const { container } = render(<Tick />)
    const span = container.querySelector('span') as HTMLSpanElement

    expect(span).toBeInTheDocument()
    expect(span.className).toContain('animate-orbit-pulse')
    expect(span.className).toContain('text-amber-gold')
  })

  it('renders without tooltip when no tooltip prop', () => {
    const { container } = render(<Tick />)
    const infoButtons = container.querySelectorAll('button')

    expect(infoButtons.length).toBe(0)
  })

  it('renders with tooltip when tooltip prop is provided', () => {
    const { container } = render(<Tick tooltip="Test tooltip" />)
    const infoButton = container.querySelector('button')

    expect(infoButton).toBeInTheDocument()
  })
})
