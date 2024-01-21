'use client'

import {
  FaRandom,
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
} from 'react-icons/fa'
import { FaRepeat } from 'react-icons/fa6'
import { IoPlanet } from 'react-icons/io5'
import { cn } from '@/services/utils/className'
import { useMusic } from '@/contexts/Music'
import { LangType } from '@/types/lang'
import { motion } from 'framer-motion'

const MusicPlayer = ({ phrases }: { phrases: LangType }) => {
  const {
    playing,
    random,
    repeat,
    setRandom,
    setRepeat,
    changeMusicStatus,
    nextMusic,
    previousMusic,
    music,
  } = useMusic()

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.1, duration: 0.6 }}
      className="flex w-fit flex-col items-center justify-center gap-3"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-20 w-20 flex-1 items-center justify-center rounded-md bg-gray-600">
          <IoPlanet size={32} />
        </span>
        <div className="flex flex-col">
          {playing && (
            <span className="opacity-70">{phrases.musicPlayerPlaying}</span>
          )}
          <span>
            {music.author} - {music.name}
          </span>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center gap-5 rounded-md bg-gray-600/40 py-2">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          onClick={() => setRandom(!random)}
          className={cn(
            'transition-all hover:opacity-80',
            random && 'text-purple-600',
          )}
        >
          <FaRandom size={20} />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={previousMusic}
          className="transition-opacity hover:opacity-80"
        >
          <FaStepBackward size={20} />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          onClick={changeMusicStatus}
          className="mx-2 flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
        >
          <span className="absolute inset-0 left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-500 opacity-25"></span>
          {playing ? <FaPause size={20} /> : <FaPlay size={20} />}
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.9, duration: 0.5 }}
          onClick={nextMusic}
          className="transition-opacity hover:opacity-80"
        >
          <FaStepForward size={20} />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.1, duration: 0.5 }}
          onClick={() => setRepeat(!repeat)}
          className={cn(
            'transition-all hover:opacity-80',
            repeat && 'text-purple-600',
          )}
        >
          <FaRepeat size={20} />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default MusicPlayer
