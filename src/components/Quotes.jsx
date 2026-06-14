import './Quotes.css'
import { wedding, assets } from '../data.js'
import { Reveal } from '../hooks/useInView.jsx'

export default function Quotes() {
  const { quotes } = wedding
  return (
    <section className="quotes">
      <img className="quotes__frame quotes__frame--top" src={assets.quoteContainerDesktop} alt="" />
      <Reveal className="quotes__inner">
        <p className="quotes__text">“{quotes.description}”</p>
        <p className="quotes__source">— {quotes.source} —</p>
      </Reveal>
      <img
        className="quotes__frame quotes__frame--bottom"
        src={assets.quoteContainerDesktop}
        alt=""
      />
    </section>
  )
}
