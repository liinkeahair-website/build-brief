import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          color: '#f7f2e8',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        <div style={{ fontSize: 108, fontWeight: 700, lineHeight: 1 }}>R</div>
        <div
          style={{
            marginTop: 6,
            fontSize: 15,
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#d9b671',
          }}
        >
          Créole
        </div>
      </div>
    ),
    { ...size },
  )
}
