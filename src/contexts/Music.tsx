'use client'

import { createContext, useCallback, useContext, useRef, useState } from 'react'
import { musics, MusicType } from '@/constants/music'

interface MusicContextProps {
  playing: boolean
  random: boolean
  repeat: boolean
  music: MusicType
  changeMusicStatus: () => void
  setRandom: (value: boolean) => void
  setRepeat: (value: boolean) => void
  nextMusic: () => void
  previousMusic: () => void
}

const MusicContext = createContext<MusicContextProps | null>(null)

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const [musicIndex, setMusicIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [random, setRandom] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const music = musics[musicIndex]

  const changeMusicStatus = useCallback(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
    }
    setPlaying((prev) => !prev)
  }, [playing])

  const getRandomIndex = useCallback(() => {
    return Math.floor(Math.random() * musics.length)
  }, [])

  const nextMusic = useCallback(() => {
    if (random) {
      setMusicIndex(getRandomIndex())
      return
    }
    setMusicIndex((prev) => {
      if (prev + 1 < musics.length) return prev + 1
      return repeat ? 0 : prev
    })
  }, [random, repeat, getRandomIndex])

  const previousMusic = useCallback(() => {
    if (random) {
      setMusicIndex(getRandomIndex())
      return
    }
    setMusicIndex((prev) => {
      if (prev - 1 >= 0) return prev - 1
      return musics.length - 1
    })
  }, [random, getRandomIndex])

  return (
    <MusicContext.Provider
      value={{
        playing,
        random,
        repeat,
        music,
        changeMusicStatus,
        setRandom,
        setRepeat,
        nextMusic,
        previousMusic,
      }}
    >
      <audio
        onEnded={nextMusic}
        autoPlay={playing}
        key={musicIndex}
        ref={audioRef}
        className="hidden"
      >
        <source src={music.path} type="audio/mpeg" />
      </audio>
      {children}
    </MusicContext.Provider>
  )
}

export const useMusic = () => {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return context
}
