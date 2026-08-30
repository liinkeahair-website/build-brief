import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { menuNotice, menuSections } from '@/config/menu'

export const metadata: Metadata = { title: 'Menu | Racine Créole', description: 'Découvrez les entrées, plats créoles, créations fusion, accompagnements, desserts et boissons de Racine Créole.' }

export default function MenuPage() {
  return <main>
    <PageHero eyebrow="À table" title="Le menu" description="Des classiques haïtiens aux créations fusion, une cuisine généreuse qui fait voyager sans quitter Laval." image="/images/racine/ambiance-bg.jpg" />
    <nav className="sticky top-16 z-30 overflow-x-auto border-b border-border bg-background/95 px-4 backdrop-blur md:top-20" aria-label="Catégories du menu">
      <div className="mx-auto flex min-w-max max-w-7xl gap-2 py-3">{menuSections.map(section => <a key={section.id} href={`#${section.id}`} className="flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-semibold hover:bg-muted">{section.title}</a>)}</div>
    </nav>
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-16">
      <div className="flex flex-col gap-10 md:gap-14">
        {menuSections.map(section => <section key={section.id} id={section.id} className="scroll-mt-32">
          <div className="mb-4 border-b-2 border-primary pb-2 md:mb-6">
            <h2 className="font-serif text-2xl leading-tight md:text-3xl">{section.title}</h2>
            {section.subtitle && <p className="mt-1.5 max-w-2xl text-xs leading-5 text-muted-foreground md:text-sm">{section.subtitle}</p>}
          </div>
          <ul className="grid gap-x-10 md:grid-cols-2">{section.items.map(item => <li key={item.name} className="border-b border-border/60 py-2.5 last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0">
            <div className="flex items-baseline gap-3">
              <h3 className="font-medium leading-snug">{item.name}</h3>
              <span className="mx-1 hidden h-px flex-1 translate-y-[-2px] border-b border-dotted border-border sm:block" aria-hidden="true" />
              {item.price && <span className="ml-auto font-mono text-sm font-semibold tabular-nums sm:ml-0">{item.price} $</span>}
              {item.note && !item.price && <span className="ml-auto text-xs font-semibold uppercase tracking-wide text-primary sm:ml-0">{item.note}</span>}
            </div>
            {item.description && <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{item.description}</p>}
            {item.variants && <ul className="mt-1.5 flex flex-col gap-1 border-l-2 border-primary/25 pl-3">{item.variants.map(v => <li key={v.label} className="flex items-baseline gap-2 text-sm">
              <span className="text-muted-foreground">{v.label}</span>
              <span className="mx-1 hidden h-px flex-1 translate-y-[-2px] border-b border-dotted border-border/70 sm:block" aria-hidden="true" />
              <span className="ml-auto font-mono text-[13px] font-semibold tabular-nums sm:ml-0">{v.price} $</span>
            </li>)}</ul>}
          </li>)}</ul>
        </section>)}
      </div>
      <p className="mt-12 rounded-lg bg-muted p-4 text-xs leading-5 text-muted-foreground md:text-sm">{menuNotice}</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/commander" className="button-primary button-large">Commander en ligne <ArrowRight aria-hidden="true" /></Link><Link href="/groupes" className="button-outline button-large">Traiteur & groupes</Link></div>
    </div>
  </main>
}
