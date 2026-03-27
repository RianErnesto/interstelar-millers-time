import { ButtonProps } from './types'
import { cn } from '@/services/utils/className'

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-md bg-amber-dark px-4 py-2 text-base transition-all hover:bg-amber-gold hover:shadow-[0_0_12px_rgba(212,160,74,0.2)] focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-gold',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
