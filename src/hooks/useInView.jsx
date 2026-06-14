import { useEffect, useRef, useState } from 'react'

// Adds `is-visible` when the element scrolls into view (once).
export default function useInView(options = { threshold: 0.18 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        obs.unobserve(entry.target)
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, inView]
}

// Small helper component for the common reveal pattern.
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
