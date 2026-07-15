import NewsletterForm from '../newsletter/NewsletterForm'

export default function NewsletterSection() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 md:px-10 md:py-28">
      <div className="flex flex-col items-center gap-6 border border-beige bg-washi px-6 py-16 text-center md:px-16">
        <p className="text-xs uppercase tracking-widest2 text-sumi2">Antes de irte</p>
        <h2 className="font-display text-display-md text-sumi">
          Historias, no promociones
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-sumi2">
          Una nota ocasional sobre objetos nuevos, colecciones de temporada y
          pequeños rituales para tu espacio.
        </p>
        <NewsletterForm />
      </div>
    </section>
  )
}
