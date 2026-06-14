import { useState } from 'react'
import './MusicToggle.css'

// The original template has a background-music control. No track ships with the
// data, so this is a UI toggle; drop a file at /assets/music.mp3 to make it play.
const TRACK = '/assets/music.mp3'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const [audio] = useState(() => {
    const a = new Audio(TRACK)
    a.loop = true
    return a
  })

  const toggle = () => {
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }

  return (
    <button
      className={`music ${playing ? 'music--on' : ''}`}
      onClick={toggle}
      aria-label="Toggle music"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
      </svg>
    </button>
  )
}
