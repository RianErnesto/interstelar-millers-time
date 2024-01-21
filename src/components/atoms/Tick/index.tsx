'use client'

import { useState, useEffect } from 'react'
import { IoPlanet } from 'react-icons/io5'

const Tick = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prevOpacity) => {
        if (prevOpacity === 1) {
          return 0
        }
        return 1
      })
    }, 1250)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="block h-8 w-8 rounded-full transition-opacity ease-in"
      style={{ opacity }}
    >
      <IoPlanet size={32} />
    </span>
  )
}

export default Tick
