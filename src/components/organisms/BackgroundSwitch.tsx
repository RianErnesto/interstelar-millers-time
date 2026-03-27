'use client'

import Image, { StaticImageData } from 'next/image'
import MillerNearGargantua from 'public/images/miller_near_gargantua.webp'
import EnteringMiller from 'public/images/entering_miller.jpg'
import { useState, useEffect } from 'react'
import { cn } from '@/services/utils/className'
import { motion } from 'framer-motion'

const backgrounds: { src: StaticImageData; alt: string }[] = [
  { src: MillerNearGargantua, alt: 'Miller Near Gargantua' },
  { src: EnteringMiller, alt: 'Entering Miller' },
]

const BackgroundSwitch = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length)
    }, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {backgrounds.map((bg, index) => (
        <motion.div
          key={bg.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={cn(
            'absolute inset-0 h-screen',
            currentIndex !== index && 'invisible',
          )}
        >
          <Image
            src={bg.src}
            alt={bg.alt}
            fill
            priority={index === 0}
            quality={100}
          />
        </motion.div>
      ))}
    </>
  )
}

export default BackgroundSwitch
