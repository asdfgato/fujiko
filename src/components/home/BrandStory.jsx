import SealMark from '../ui/SealMark'

export default function BrandStory() {
  return (
    <section className="bg-sumi text-kinari">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
        <div className="relative aspect-[4/5] order-2 md:order-1">
          <img
            src="https://picsum.photos/seed/fujiko-story-hands/1000/1250"
            alt="Manos escribiendo en un cuaderno Fujiko junto a una taza de té"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <div className="mb-6 flex items-center gap-3">
            <SealMark className="border-kinari [&>span]:bg-kinari" />
            <span className="text-xs uppercase tracking-widest2 text-kinari/60">Nuestra historia</span>
          </div>
          <h2 className="font-display text-display-md leading-tight text-kinari">
            Creemos que los objetos correctos cambian la forma en que vivimos el día.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-kinari/70">
            Fujiko nació de una idea simple: un buen cuaderno no solo guarda lo que
            escribes, también da forma a cómo piensas. Seleccionamos y creamos cada
            objeto con esa intención — materiales honestos, funcionalidad silenciosa
            y un diseño que envejece bien.
          </p>
          <p className="mt-4 text-base leading-relaxed text-kinari/70">
            Empezamos con papel y tinta. Con el tiempo, iremos sumando los objetos
            que acompañan un espacio bien pensado: para el escritorio, para el
            hogar, para los rituales pequeños que hacen la diferencia.
          </p>
        </div>
      </div>
    </section>
  )
}
