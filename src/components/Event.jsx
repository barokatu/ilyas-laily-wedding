import './Event.css'
import { wedding } from '../data.js'
import Countdown from './Countdown.jsx'
import { Reveal } from '../hooks/useInView.jsx'

const MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
]
const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

function parse(s) {
  return new Date(s.replace(' ', 'T'))
}
function fmtDate(s) {
  const d = parse(s)
  return `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`
}
function fmtTime(s) {
  const d = parse(s)
  return `${String(d.getHours()).padStart(2, '0')}.${String(d.getMinutes()).padStart(2, '0')}`
}

function EventCard({ ev }) {
  return (
    <Reveal className="event__card">
      <h3 className="event__name">{ev.title}</h3>
      <div className="event__divider" />
      <p className="event__date">{fmtDate(ev.startTime)}</p>
      <p className="event__time">
        {fmtTime(ev.startTime)} {ev.endTime ? `– ${fmtTime(ev.endTime)}` : '– Selesai'} {ev.area}
      </p>
      <p className="event__loc">
        {ev.location.split('\n').map((l, i) => (
          <span key={i}>
            {l}
            <br />
          </span>
        ))}
      </p>
      <a className="event__map" href={ev.map} target="_blank" rel="noreferrer">
        View Location
      </a>
    </Reveal>
  )
}

export default function Event() {
  const { events, eventDate } = wedding
  return (
    <section className="event" id="event">
      <Reveal className="event__head">
        <p className="eyebrow">Save The Date</p>
        <h2 className="event__title">When &amp; Where</h2>
        <div className="divider" />
      </Reveal>

      <Reveal>
        <Countdown target={eventDate} />
      </Reveal>

      <div className="event__cards">
        {events.map((ev) => (
          <EventCard key={ev.title} ev={ev} />
        ))}
      </div>
    </section>
  )
}
