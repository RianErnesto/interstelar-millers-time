import { describe, it, expect } from 'vitest'
import { musics } from './music'

describe('musics', () => {
  it('has 24 tracks', () => {
    expect(musics).toHaveLength(24)
  })

  it('every track has name, author, and path', () => {
    for (const track of musics) {
      expect(track.name).toBeTruthy()
      expect(track.path).toBeTruthy()
    }
  })

  it('every path ends with .mp3', () => {
    for (const track of musics) {
      expect(track.path).toMatch(/\.mp3$/)
    }
  })

  it('every path starts with /audio/', () => {
    for (const track of musics) {
      expect(track.path).toMatch(/^\/audio\//)
    }
  })
})
