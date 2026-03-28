'use client'

import { IoPlanet } from 'react-icons/io5'
import Info from '@/components/atoms/Info'

const Tick = ({ tooltip }: { tooltip?: string }) => {
  return (
    <span className="relative flex h-9 w-9 animate-orbit-pulse items-center justify-center rounded-full border border-amber-gold/40 text-amber-gold">
      <IoPlanet size={20} />
      {tooltip && (
        <span className="absolute -right-1 -top-1">
          <Info>{tooltip}</Info>
        </span>
      )}
    </span>
  )
}

export default Tick
