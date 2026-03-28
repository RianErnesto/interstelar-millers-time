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
import { motion } from 'framer-motion'

const MusicPlayer = () => {
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
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-amber-gold/10"
      style={{ background: 'rgba(13,17,23,0.95)' }}
    >
      {/* Animated glow line */}
      <div
        className="absolute left-0 right-0 top-0 h-0.5 animate-glow-slide"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(212,160,74,0) 20%, rgba(212,160,74,0.5) 35%, rgba(212,160,74,0.8) 50%, rgba(212,160,74,0.5) 65%, rgba(212,160,74,0) 80%, transparent 100%)',
        }}
      />

      <div className="mx-auto flex max-w-[1280px] items-center gap-5 px-4 py-3 sm:px-8">
        {/* Album art */}
        <span
          className={cn(
            'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-amber-gold/20 bg-amber-gold/10 text-amber-gold',
            playing && 'animate-spin-slow',
          )}
        >
          <IoPlanet size={22} />
        </span>

        {/* Track info */}
        <div className="hidden min-w-0 flex-1 sm:block">
          {playing && (
            <span className="text-[10px] font-medium uppercase tracking-[2px] text-amber-gold/50">
              Now Playing
            </span>
          )}
          <p className="truncate text-sm text-white/80">
            {music.author} — {music.name}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-1 items-center justify-center gap-2 sm:flex-none">
          <button
            onClick={() => setRandom(!random)}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full transition-all hover:bg-amber-gold/10 hover:text-amber-gold',
              random ? 'text-amber-gold' : 'text-white/50',
            )}
          >
            <FaRandom size={16} />
          </button>
          <button
            onClick={previousMusic}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition-all hover:bg-amber-gold/10 hover:text-amber-gold"
          >
            <FaStepBackward size={16} />
          </button>
          <button
            onClick={changeMusicStatus}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-gold/30 text-amber-gold transition-all hover:border-amber-gold hover:shadow-[0_0_16px_rgba(212,160,74,0.2)]"
          >
            {playing ? <FaPause size={18} /> : <FaPlay size={18} />}
          </button>
          <button
            onClick={nextMusic}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition-all hover:bg-amber-gold/10 hover:text-amber-gold"
          >
            <FaStepForward size={16} />
          </button>
          <button
            onClick={() => setRepeat(!repeat)}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full transition-all hover:bg-amber-gold/10 hover:text-amber-gold',
              repeat ? 'text-amber-gold' : 'text-white/50',
            )}
          >
            <FaRepeat size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default MusicPlayer
