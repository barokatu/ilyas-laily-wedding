import './BrideGroom.css'
import { wedding, assets } from '../data.js'
import { Reveal } from '../hooks/useInView.jsx'

function Person({ data, label }) {
  return (
    <Reveal className="bg__person">
      {data.photo && (
        <div className="bg__photo">
          <img src={data.photo} alt={data.fullName} loading="lazy" />
        </div>
      )}
      <p className="eyebrow bg__role">{label}</p>
      <h3 className="bg__name">{data.fullName}</h3>
      <p className="bg__parents">
        {data.info.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
      {data.instagram && (
        <a className="bg__ig" href={`https://instagram.com/${data.instagram}`} target="_blank" rel="noreferrer">
          @{data.instagram}
        </a>
      )}
    </Reveal>
  )
}

export default function BrideGroom() {
  const { couple } = wedding
  return (
    <section className="bg" id="couple">
      <img className="bg__ornament bg__ornament--top" src={assets.brideTopDesktop} alt="" />

      <div className="bg__intro">
        <Reveal>
          <p className="eyebrow">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p className="bg__lead">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan
            pernikahan putra-putri kami:
          </p>
        </Reveal>
      </div>

      <Person data={couple.bride} label="The Bride" />

      <img className="bg__and" src={assets.shapeAnd} alt="&" />

      <Person data={couple.groom} label="The Groom" />

      <img className="bg__ornament bg__ornament--bottom" src={assets.brideBottomDesktop} alt="" />
    </section>
  )
}
