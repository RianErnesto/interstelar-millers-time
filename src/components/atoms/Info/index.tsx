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
          className="flex h-5 w-5 items-center justify-center rounded-full bg-black transition-colors hover:opacity-80"
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
