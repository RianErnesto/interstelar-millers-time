import { LangType } from '@/types/lang'
import { socials } from '@/constants/socials'

const DevelopedBy = ({ phrases }: { phrases: LangType }) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <span className="text-base font-medium">
        {phrases.developedBy}{' '}
        <b className="font-bold transition-colors hover:text-amber-gold">
          Rian Ernesto
        </b>
      </span>
      <div className="flex gap-2">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            aria-label={social.name}
            className="rounded-sm transition-colors hover:text-amber-gold focus-visible:text-amber-gold focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-amber-gold"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default DevelopedBy
