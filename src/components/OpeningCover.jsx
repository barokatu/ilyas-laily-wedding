import './OpeningCover.css'
import { wedding, assets } from '../data.js'

export default function OpeningCover({ guest, opened, onOpen }) {
  const { cover } = wedding

  return (
    <div
      className={`opening ${opened ? 'opening--gone' : ''}`}
      style={{ '--bg': `url(${assets.openingBgDesktop})` }}
      aria-hidden={opened}
    >
      <img className="opening__ornament opening__ornament--top" src={assets.openingOrnament} alt="" />
      <img
        className="opening__ornament opening__ornament--bottom"
        src={assets.openingOrnament}
        alt=""
      />

      <div className="opening__inner">
        <p className="eyebrow opening__eyebrow">{cover.eventName}</p>

        <h1 className="opening__names">
          <span>{cover.nicknameGroom}</span>
          <img className="opening__and" src={assets.shapeAnd} alt="&" />
          <span>{cover.nicknameBride}</span>
        </h1>

        <p className="opening__date">22 . 07 . 2026</p>
        <div className="divider" />

        <div className="opening__guest">
          <p className="opening__guest-label">Kepada Yth.</p>
          <p className="opening__guest-name">{guest || 'Bapak / Ibu / Saudara / i'}</p>
        </div>

        <button className="opening__btn" onClick={onOpen}>
          <span>Open Invitation</span>
        </button>
      </div>
    </div>
  )
}
