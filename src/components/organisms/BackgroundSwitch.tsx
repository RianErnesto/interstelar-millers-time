'use client'

import Image from 'next/image'
import MillerNearGargantua from 'public/images/miller_near_gargantua.webp'
import EnteringMiller from 'public/images/entering_miller.jpg'
import { useState, useEffect } from 'react'
import { cn } from '@/services/utils/className'
import { motion } from 'framer-motion'

const BackgroundSwitch = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const availableImages = [MillerNearGargantua, EnteringMiller]

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex === availableImages.length - 1)
        setCurrentImageIndex(0)
      else setCurrentImageIndex((prev) => (prev + 1) % availableImages.length)
    }, 20000)
    return () => clearInterval(interval)
  }, [availableImages.length, currentImageIndex])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'invisible absolute inset-0 h-screen opacity-0 transition-all duration-1000',
          currentImageIndex === 0 && 'visible opacity-100',
        )}
      >
        <Image
          src={MillerNearGargantua}
          alt="Miller Near Gargantua"
          fill
          priority
          quality={100}
        />
      </motion.div>
      <motion.div
        className={cn(
          'invisible absolute inset-0 h-screen opacity-0 transition-all',
          currentImageIndex === 1 && 'visible opacity-100',
        )}
      >
        <Image
          src={EnteringMiller}
          alt="Miller Near Gargantua"
          fill
          priority
          quality={100}
        />
      </motion.div>
    </>
  )
}

export default BackgroundSwitch
