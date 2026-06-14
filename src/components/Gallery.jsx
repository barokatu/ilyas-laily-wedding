import './Gallery.css'
import { wedding } from '../data.js'
import { Reveal } from '../hooks/useInView.jsx'

export default function Gallery() {
  const photos = wedding.galleryPhotos
  const [feature, ...rest] = photos

  return (
    <section className="gallery" id="gallery">
      <Reveal className="gallery__head">
        <p className="eyebrow">Our Moments</p>
        <h3 className="gallery__title">Gallery</h3>
        <div className="divider" />
      </Reveal>

      <Reveal className="gallery__feature">
        <img src={feature} alt={`${wedding.cover.nicknameGroom} & ${wedding.cover.nicknameBride}`} />
      </Reveal>

      <div className="gallery__grid">
        {rest.map((src, i) => (
          <Reveal key={i} className="gallery__cell" delay={i * 80}>
            <img src={src} alt={`Moment ${i + 1}`} loading="lazy" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
