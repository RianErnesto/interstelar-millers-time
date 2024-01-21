import { LangType } from '@/types/lang'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const DevelopedBy = ({ phrases }: { phrases: LangType }) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <span className="text-base font-medium">
        {phrases.developedBy}{' '}
        <b className="font-bold transition-colors hover:text-purple-600">
          Rian Ernesto
        </b>
      </span>
      <div className="flex gap-2">
        <a
          href="https://www.instagram.com/leaaorian/"
          target="_blank"
          className="rounded-sm transition-colors hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-purple-600"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/rian-ernesto/"
          target="_blank"
          className="rounded-sm transition-colors hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-purple-600"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/RianErnesto"
          target="_blank"
          className="rounded-sm transition-colors hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-purple-600"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  )
}

export default DevelopedBy
