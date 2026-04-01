import { FaInstagram, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export type Social = {
  name: string
  href: string
  icon: React.ReactNode
}

export const socials: Social[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/leaaorian/',
    icon: <FaInstagram size={20} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rian-ernesto/',
    icon: <FaLinkedin size={20} />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/RianErnesto',
    icon: <FaGithub size={20} />,
  },
  {
    name: 'X',
    href: 'https://x.com/ORianErnesto',
    icon: <FaXTwitter size={20} />,
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@rianernesto9',
    icon: <FaMedium size={20} />,
  },
]
