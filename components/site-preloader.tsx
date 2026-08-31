'use client'

import { useEffect, useState } from 'react'

export function SitePreloader() {
  const [phase, setPhase] = useState<'loading' | 'leaving' | 'done'>('loading')

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Only show once per browser session
    if (sessionStorage.getItem('rc-preloaded')) {
      setPhase('done')
      return
    }

    document.body.style.overflow = 'hidden'
    const leave = setTimeout(() => setPhase('leaving'), 1700)
    const finish = setTimeout(() => {
      setPhase('done')
      sessionStorage.setItem('rc-preloaded', '1')
      document.body.style.overflow = ''
    }, 2200)

    return () => {
      clearTimeout(leave)
      clearTimeout(finish)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`preloader ${phase === 'leaving' ? 'preloader--leaving' : ''}`} role="status" aria-live="polite">
      <span className="sr-only">Chargement de Racine Créole</span>
      <div className="preloader-mark" aria-hidden="true">
        <span className="preloader-glyph">R</span>
        <span className="preloader-ring" />
      </div>
      <p className="preloader-word" aria-hidden="true">
        {'Racine Créole'.split('').map((char, i) => (
          <span key={i} style={{ animationDelay: `${0.4 + i * 0.045}s` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>
    </div>
  )
}
