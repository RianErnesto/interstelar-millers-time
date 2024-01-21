import { ButtonProps } from './types'
import { cn } from '@/services/utils/className'

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-md bg-purple-900 px-4 py-2 text-base transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
