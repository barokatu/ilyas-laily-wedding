import { useState, useEffect } from 'react'
import OpeningCover from './components/OpeningCover.jsx'
import Cover from './components/Cover.jsx'
import Quotes from './components/Quotes.jsx'
import BrideGroom from './components/BrideGroom.jsx'
import Gallery from './components/Gallery.jsx'
import Event from './components/Event.jsx'
import Rsvp from './components/Rsvp.jsx'
import Wish from './components/Wish.jsx'
import MusicToggle from './components/MusicToggle.jsx'

export default function App() {
  // Read ?to= / ?guest= so the opening cover can greet a named guest.
  const params = new URLSearchParams(window.location.search)
  const guest = params.get('to') || params.get('guest') || ''

  // ?preview=1 skips the splash (useful for sharing a direct preview link).
  const [opened, setOpened] = useState(params.get('preview') === '1')

  // Lock body scroll until the invitation is opened.
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
  }, [opened])

  return (
    <div className="invitation">
      <OpeningCover guest={guest} opened={opened} onOpen={() => setOpened(true)} />

      {/* Main content is mounted underneath; the cover slides away to reveal it. */}
      <main>
        <Cover />
        <Quotes />
        <BrideGroom />
        <Gallery />
        <Event />
        <Rsvp />
        <Wish />
      </main>

      {opened && <MusicToggle />}
    </div>
  )
}
