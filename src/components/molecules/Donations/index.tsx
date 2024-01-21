import { LangType } from '@/types/lang'

const Donations = ({ phrases }: { phrases: LangType }) => {
  return (
    <a
      href="https://www.paypal.com/donate/?business=UXVBU3FL93GC2&no_recurring=0&item_name=Que+bom+que+gostou+do+site+feito+por+mim%2C+agrade%C3%A7o+o+suporte+que+est%C3%A1+dando+no+meu+portif%C3%B3lio+%21&currency_code=BRL"
      target="_blank"
      className="rounded-md bg-gray-600/70 px-8 py-2 font-semibold transition-colors hover:bg-purple-600 focus-visible:bg-purple-600 focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {phrases.donation} 😄 - PayPal
    </a>
  )
}

export default Donations
