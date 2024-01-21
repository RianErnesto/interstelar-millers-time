import { ButtonHTMLAttributes, ReactNode } from 'react'

export type InfoProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
