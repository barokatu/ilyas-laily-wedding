import { useState } from 'react'
import './Gift.css'
import { wedding, assets } from '../data.js'
import { Reveal } from '../hooks/useInView.jsx'

function Account({ acc }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(acc.accountNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <Reveal className="gift__card">
      <span className="gift__bank">{acc.bankName}</span>
      <span className="gift__number">{acc.accountNumber}</span>
      <span className="gift__holder">a.n. {acc.accountName}</span>
      <button className="gift__copy" onClick={copy}>
        {copied ? 'Tersalin ✓' : 'Salin No. Rekening'}
      </button>
    </Reveal>
  )
}

export default function Gift() {
  const { gift } = wedding
  return (
    <section className="gift" id="gift">
      <img className="gift__ornament gift__ornament--top" src={assets.giftTop} alt="" />

      <Reveal className="gift__head">
        <p className="eyebrow">Wedding Gift</p>
        <h2 className="gift__title">Amplop Digital</h2>
        <div className="divider" />
        <p className="gift__notes">{gift.notes}</p>
      </Reveal>

      <div className="gift__cards">
        {gift.accounts.map((acc, i) => (
          <Account key={i} acc={acc} />
        ))}
      </div>

      <img className="gift__ornament gift__ornament--bottom" src={assets.giftBottom} alt="" />
    </section>
  )
}
