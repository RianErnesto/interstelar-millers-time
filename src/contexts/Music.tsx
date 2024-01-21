'use client'

import { createContext, useContext, useRef, useState } from 'react'
import { musics, MusicType } from '@/constants/music'

interface MusicContextProps {
  playing: boolean
  random: boolean
  repeat: boolean
  changeMusicStatus: () => void
  setRandom: (value: boolean) => void
  setRepeat: (value: boolean) => void
  nextMusic: () => void
  previousMusic: () => void
  music: MusicType
}

const MusicContext = createContext<MusicContextProps>({} as MusicContextProps)

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentMusic, setCurrentMusic] = useState<MusicType>(musics[0])
  const [musicIndex, setMusicIndex] = useState(0)
  const [playing, setPlaying] = useState<boolean>(false)
  const [random, setRandom] = useState<boolean>(false)
  const [repeat, setRepeat] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const changeMusicStatus = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
    }
    setPlaying((prev) => !prev)
  }

  const nextMusic = () => {
    if (!repeat && musicIndex === musics.length - 1 && !random) return
    if (random) {
      const randomIndex = Math.floor(Math.random() * musics.length)
      setMusicIndex(randomIndex)
      setCurrentMusic(musics[randomIndex])
      return
    }
    if (musicIndex + 1 < musics.length) {
      setMusicIndex((prev) => prev + 1)
      setCurrentMusic(musics[musicIndex + 1])
    } else {
      setMusicIndex(0)
      setCurrentMusic(musics[0])
    }
  }

  const previousMusic = () => {
    if (random) {
      const randomIndex = Math.floor(Math.random() * musics.length)
      setMusicIndex(randomIndex)
      setCurrentMusic(musics[randomIndex])
      return
    }
    if (musicIndex - 1 >= 0) {
      setMusicIndex((prev) => prev - 1)
      setCurrentMusic(musics[musicIndex - 1])
    } else {
      setMusicIndex(musics.length - 1)
      setCurrentMusic(musics[musics.length - 1])
    }
  }

  return (
    <MusicContext.Provider
      value={{
        playing,
        random,
        repeat,
        changeMusicStatus,
        setRandom,
        setRepeat,
        nextMusic,
        previousMusic,
        music: currentMusic,
      }}
    >
      <audio
        onEnded={nextMusic}
        autoPlay={playing}
        key={musicIndex}
        ref={audioRef}
        controls
        className="hidden"
        style={{ display: 'none' }}
      >
        <source src={currentMusic.path} type="audio/mpeg" />
      </audio>
      {children}
    </MusicContext.Provider>
  )
}

export const useMusic = () => useContext(MusicContext)
