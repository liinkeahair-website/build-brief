import Image from 'next/image'

const slides = [
  { src: '/images/racine/hero-spread.jpg', position: 'center' },
  { src: '/images/racine/dish-1.jpg', position: 'center 45%' },
  { src: '/images/racine/dish-2.jpg', position: 'center 55%' },
  { src: '/images/racine/dish-8.jpg', position: 'center 50%' },
]

export function HeroSlideshow() {
  return (
    <div className="hero-bg" aria-hidden="true">
      {slides.map((slide, index) => (
        <div key={slide.src} className="hero-slide" style={{ '--i': index } as React.CSSProperties}>
          <Image
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: slide.position }}
          />
        </div>
      ))}
    </div>
  )
}
