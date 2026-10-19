'use client'

import { useEffect } from 'react'

export function DeactivationNotice() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div className="deactivation-notice" role="dialog" aria-modal="true" aria-labelledby="deactivation-title">
      <div className="deactivation-card">
        <div className="deactivation-mark" aria-hidden="true">R</div>
        <p className="deactivation-kicker">Racine Créole</p>
        <h1 id="deactivation-title">Website deactivated</h1>
        <p className="deactivation-copy">
          This website is temporarily unavailable. Please contact the administrator to reactivate it.
        </p>
        <a className="deactivation-contact" href="mailto:digitalsesma@gmail.com">
          Contact admin
        </a>
      </div>
    </div>
  )
}
