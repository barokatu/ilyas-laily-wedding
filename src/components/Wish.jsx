import { useState, useEffect } from 'react'
import './Wish.css'
import { wedding } from '../data.js'
import { Reveal } from '../hooks/useInView.jsx'

const SEED = [
  { name: 'Keluarga Besar', message: 'Selamat menempuh hidup baru. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.', at: '' },
  { name: 'Sahabat', message: 'Bahagia selalu untuk kalian berdua! Barakallahu lakuma.', at: '' },
]

export default function Wish() {
  const { cover, whatsapp } = wedding
  const [wishes, setWishes] = useState(SEED)
  const [form, setForm] = useState({ name: '', message: '' })

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('wishes') || 'null')
    if (saved) setWishes(saved)
  }, [])

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return

    // Keep a copy on the page, then hand the wish off to WhatsApp.
    const next = [{ ...form, at: new Date().toISOString() }, ...wishes]
    setWishes(next)
    localStorage.setItem('wishes', JSON.stringify(next))

    const text = `Nama: ${form.name}\nUcapan: ${form.message}`
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setForm({ name: '', message: '' })
  }

  return (
    <section className="wish" id="wish">
      <Reveal className="wish__head">
        <p className="eyebrow">Send Your Love</p>
        <h2 className="wish__title">Wishes &amp; Prayers</h2>
        <div className="divider" />
      </Reveal>

      <Reveal>
        <form className="wish__form" onSubmit={submit}>
          <input
            type="text"
            placeholder="Nama Anda"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <textarea
            rows="3"
            placeholder="Tuliskan ucapan & doa Anda…"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          />
          <button type="submit" className="wish__wa">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.25 8.25-8.25Zm-4.7 4.43c-.22 0-.58.08-.88.41-.3.33-1.16 1.14-1.16 2.77 0 1.63 1.19 3.21 1.35 3.43.17.22 2.3 3.51 5.65 4.92.79.34 1.4.54 1.88.7.79.25 1.51.21 2.08.13.63-.09 1.96-.8 2.23-1.58.28-.78.28-1.44.2-1.58-.09-.14-.31-.22-.64-.39-.33-.16-1.96-.97-2.26-1.08-.3-.11-.52-.16-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.4-.52-2.66-1.65-.98-.88-1.65-1.96-1.84-2.29-.19-.33-.02-.51.15-.67.15-.15.33-.39.5-.58.16-.2.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.16-.74-1.8-1.02-2.46-.27-.65-.54-.56-.74-.57h-.63Z" />
            </svg>
            Kirim via WhatsApp
          </button>
        </form>
      </Reveal>

      <div className="wish__list">
        {wishes.map((w, i) => (
          <Reveal key={i} className="wish__item" delay={Math.min(i, 4) * 60}>
            <p className="wish__name">{w.name}</p>
            <p className="wish__msg">{w.message}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="wish__closing">
        <p className="wish__salam">
          Wassalamu'alaikum Warahmatullahi Wabarakatuh
        </p>
        <p className="wish__thanks">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami,
          apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        </p>
        <p className="wish__from">Kami yang berbahagia,</p>
        <h3 className="wish__couple">
          {cover.nicknameGroom} &amp; {cover.nicknameBride}
        </h3>
      </Reveal>
    </section>
  )
}
