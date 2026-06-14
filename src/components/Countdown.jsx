import { useEffect, useState } from 'react'

function diff(target) {
  const now = Date.now()
  const t = new Date(target.replace(' ', 'T')).getTime()
  let d = Math.max(0, t - now)
  const days = Math.floor(d / 86400000)
  d -= days * 86400000
  const hours = Math.floor(d / 3600000)
  d -= hours * 3600000
  const minutes = Math.floor(d / 60000)
  d -= minutes * 60000
  const seconds = Math.floor(d / 1000)
  return { days, hours, minutes, seconds }
}

export default function Countdown({ target }) {
  const [t, setT] = useState(() => diff(target))

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const items = [
    { label: 'Days', value: t.days },
    { label: 'Hours', value: t.hours },
    { label: 'Mins', value: t.minutes },
    { label: 'Secs', value: t.seconds },
  ]

  return (
    <div className="countdown">
      {items.map((it) => (
        <div className="countdown__cell" key={it.label}>
          <span className="countdown__num">{String(it.value).padStart(2, '0')}</span>
          <span className="countdown__label">{it.label}</span>
        </div>
      ))}
    </div>
  )
}
