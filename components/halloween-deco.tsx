import Image from 'next/image'

export function HalloweenDeco() {
  return (
    <div className="halloween-deco" aria-hidden="true">
      <div className="halloween-item halloween-bat">
        <Image src="/images/halloween/bat.png" alt="" fill sizes="160px" className="object-cover" />
      </div>
      <div className="halloween-item halloween-ghost">
        <Image src="/images/halloween/ghost.png" alt="" fill sizes="140px" className="object-cover" />
      </div>
      <div className="halloween-item halloween-pumpkin">
        <Image src="/images/halloween/pumpkin.png" alt="" fill sizes="240px" className="object-cover" />
      </div>
    </div>
  )
}
