import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Racine Créole · Cuisine fusion créole à Laval'

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/images/racine/logo.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#153a2a',
          padding: 64,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ffffff',
            borderRadius: 28,
            padding: '48px 72px',
            boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="Racine Créole" width={520} height={520} style={{ objectFit: 'contain' }} />
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 34,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#d9b671',
            fontFamily: 'Helvetica, Arial, sans-serif',
          }}
        >
          Cuisine fusion créole · Laval
        </div>
      </div>
    ),
    { ...size },
  )
}
