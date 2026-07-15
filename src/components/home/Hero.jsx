import { Link } from 'react-router-dom'
import { brand } from '../../config/brand'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-washi">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-8 md:px-10 md:py-0">
        <div className="order-2 md:order-1 animate-fadeUp">
          <span className="mb-6 inline-block text-xs uppercase tracking-widest2 text-sumi2">
            {brand.tagline}
          </span>
          <h1 className="font-display text-display-md leading-[1.1] text-sumi sm:text-display-lg md:text-display-xl">
            El silencio
            <br />
            antes de escribir.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-sumi2">
            Cuadernos, agendas y herramientas de escritura hechos para acompañar
            tus ideas — no para apurarlas.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/catalogo" variant="primary" size="lg">
              Explorar catálogo
            </Button>
            <Button as={Link} to="/nosotros" variant="ghost" size="lg">
              Conoce Fujiko
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 relative aspect-[4/5] md:aspect-auto md:h-[88vh] md:max-h-[820px]">
          <img
            src="https://picsum.photos/seed/fujiko-hero-main/1200/1500"
            alt="Composición de cuadernos, agenda y bolígrafo Fujiko sobre un escritorio de madera clara"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 hidden max-w-[220px] border border-kinari/40 bg-kinari/90 p-4 backdrop-blur sm:block">
            <p className="font-display text-sm text-sumi">Cuaderno Kasane</p>
            <p className="mt-1 text-xs text-sumi2">Papel punteado · 120g</p>
          </div>
        </div>
      </div>
    </section>
  )
}
