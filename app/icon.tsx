import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#153a2a',
          color: '#f7f2e8',
          fontSize: 46,
          fontWeight: 700,
          fontFamily: 'Georgia, "Times New Roman", serif',
          borderRadius: 12,
        }}
      >
        R
      </div>
    ),
    { ...size },
  )
}
