import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
