import './Cover.css'
import { wedding, assets } from '../data.js'

export default function Cover() {
  const { cover } = wedding
  return (
    <section
      className="cover"
      style={{ backgroundImage: `url(${assets.coverBgDesktop})` }}
    >
      <img className="cover__tree cover__tree--left" src={assets.treeLeft} alt="" />
      <img className="cover__tree cover__tree--right" src={assets.treeRight} alt="" />

      <div className="cover__content">
        <p className="eyebrow cover__eyebrow">{cover.eventName}</p>
        <h2 className="cover__names">
          <span>{cover.nicknameGroom}</span>
          <img className="cover__and" src={assets.shapeAnd2} alt="&" />
          <span>{cover.nicknameBride}</span>
        </h2>
        <p className="cover__date">Rabu, 22 Juli 2026</p>
      </div>

      <div className="cover__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
