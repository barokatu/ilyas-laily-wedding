import { useState } from 'react'
import './Rsvp.css'
import { wedding, assets } from '../data.js'
import { Reveal } from '../hooks/useInView.jsx'

export default function Rsvp() {
  const { rsvpEvents, whatsapp } = wedding
  const [form, setForm] = useState({
    name: '',
    attending: 'yes',
    event: rsvpEvents[0]?.name || '',
    guests: 1,
  })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()

    // Keep a local copy, then hand the confirmation off to WhatsApp.
    const all = JSON.parse(localStorage.getItem('rsvp') || '[]')
    all.push({ ...form, at: new Date().toISOString() })
    localStorage.setItem('rsvp', JSON.stringify(all))

    const attendingText = form.attending === 'yes' ? 'Hadir' : 'Tidak Hadir'
    const lines = [
      'Konfirmasi Kehadiran',
      `Nama: ${form.name}`,
      `Acara: ${form.event}`,
      `Kehadiran: ${attendingText}`,
    ]
    if (form.attending === 'yes') lines.push(`Jumlah Tamu: ${form.guests}`)
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setSent(true)
  }

  const maxGuests = rsvpEvents.find((r) => r.name === form.event)?.maxAttendee || 2

  return (
    <section
      className="rsvp"
      id="rsvp"
      style={{ backgroundImage: `url(${assets.rsvpTree})` }}
    >
      <div className="rsvp__overlay" />
      <Reveal className="rsvp__inner">
        <p className="eyebrow">Are You Coming?</p>
        <h2 className="rsvp__title">RSVP</h2>
        <div className="divider" />
        <p className="rsvp__lead">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir.
        </p>

        {sent ? (
          <div className="rsvp__thanks">
            <h3>Terima kasih, {form.name}!</h3>
            <p>
              Konfirmasi kehadiran Anda telah kami terima
              {form.attending === 'yes' ? ' — sampai jumpa di hari bahagia kami.' : '.'}
            </p>
            <button className="rsvp__edit" onClick={() => setSent(false)}>
              Ubah Jawaban
            </button>
          </div>
        ) : (
          <form className="rsvp__form" onSubmit={submit}>
            <label className="rsvp__field">
              <span>Nama</span>
              <input
                type="text"
                required
                placeholder="Nama lengkap Anda"
                value={form.name}
                onChange={update('name')}
              />
            </label>

            <label className="rsvp__field">
              <span>Acara</span>
              <select value={form.event} onChange={update('event')}>
                {rsvpEvents.map((r) => (
                  <option key={r.name} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </label>

            <div className="rsvp__field">
              <span>Konfirmasi Kehadiran</span>
              <div className="rsvp__choices">
                <label className={form.attending === 'yes' ? 'is-on' : ''}>
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={form.attending === 'yes'}
                    onChange={update('attending')}
                  />
                  Hadir
                </label>
                <label className={form.attending === 'no' ? 'is-on is-no' : ''}>
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={form.attending === 'no'}
                    onChange={update('attending')}
                  />
                  Tidak Hadir
                </label>
              </div>
            </div>

            {form.attending === 'yes' && (
              <label className="rsvp__field">
                <span>Jumlah Tamu (maks. {maxGuests})</span>
                <select value={form.guests} onChange={update('guests')}>
                  {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <button type="submit" className="rsvp__submit">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.25 8.25-8.25Zm-4.7 4.43c-.22 0-.58.08-.88.41-.3.33-1.16 1.14-1.16 2.77 0 1.63 1.19 3.21 1.35 3.43.17.22 2.3 3.51 5.65 4.92.79.34 1.4.54 1.88.7.79.25 1.51.21 2.08.13.63-.09 1.96-.8 2.23-1.58.28-.78.28-1.44.2-1.58-.09-.14-.31-.22-.64-.39-.33-.16-1.96-.97-2.26-1.08-.3-.11-.52-.16-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.4-.52-2.66-1.65-.98-.88-1.65-1.96-1.84-2.29-.19-.33-.02-.51.15-.67.15-.15.33-.39.5-.58.16-.2.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.16-.74-1.8-1.02-2.46-.27-.65-.54-.56-.74-.57h-.63Z" />
              </svg>
              Konfirmasi via WhatsApp
            </button>
          </form>
        )}
      </Reveal>
    </section>
  )
}
