import { Link } from 'react-router-dom'
import { brand } from '../config/brand'
import SealMark from '../components/ui/SealMark'
import Button from '../components/ui/Button'

const values = [
  { title: 'Simplicidad', text: 'Quitamos lo que sobra hasta que solo queda lo esencial.' },
  { title: 'Calma', text: 'Diseñamos para desacelerar, no para competir por tu atención.' },
  { title: 'Artesanía', text: 'Cada objeto pasa por manos que conocen bien su oficio.' },
  { title: 'Permanencia', text: 'Preferimos lo que dura a lo que solo llama la atención.' },
]

export default function About() {
  return (
    <div>
      <section className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[21/9]">
        <img
          src="https://picsum.photos/seed/fujiko-about-hero/1600/900"
          alt="Escritorio Fujiko con cuadernos y luz natural"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-sumi/60 via-sumi/10 to-transparent p-6 md:p-14">
          <h1 className="font-display text-display-md text-kinari md:text-display-lg">
            Nuestra historia
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <SealMark />
            <span className="text-xs uppercase tracking-widest2 text-sumi2">{brand.name}</span>
          </div>
          <p className="font-display text-2xl leading-snug text-sumi md:text-3xl">
            No creamos productos para vender rápido. Creamos objetos para quedarse.
          </p>
          <p className="mt-6 text-base leading-relaxed text-sumi2">
            {brand.description} Empezamos en {brand.country}, con una selección
            pequeña y cuidada de cuadernos y herramientas de escritura. Con el
            tiempo, iremos sumando los objetos que dan forma a un espacio bien
            pensado — siempre con la misma calma con la que empezamos.
          </p>
        </div>
      </section>

      <section className="bg-washi">
        <div className="mx-auto max-w-content px-5 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            {values.map((v) => (
              <div key={v.title}>
                <div className="mb-4 h-px w-10 bg-moss" />
                <h3 className="font-display text-lg text-sumi">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sumi2">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-20 text-center md:px-10 md:py-28">
        <p className="font-display text-display-sm text-sumi md:text-display-md">
          Empieza tu colección
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-sumi2">
          Descubre los objetos que están dando forma a esta primera colección.
        </p>
        <Button as={Link} to="/catalogo" variant="primary" size="lg" className="mt-8">
          Ver catálogo
        </Button>
      </section>
    </div>
  )
}
