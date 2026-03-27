import { InfoProps } from './types'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../Tooltip'
import { FaInfo } from 'react-icons/fa6'

const Info = ({ children, ...props }: InfoProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="flex h-5 w-5 items-center justify-center rounded-full border border-amber-gold/30 text-amber-gold/50 transition-all hover:border-amber-gold hover:text-amber-gold hover:shadow-[0_0_8px_rgba(212,160,74,0.3)]"
          {...props}
        >
          <FaInfo size={10} />
        </TooltipTrigger>
        <TooltipContent>{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Info
