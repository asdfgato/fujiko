import SectionHeading from '../ui/SectionHeading'

const pillars = [
  {
    title: 'Materiales honestos',
    text: 'Papel, tela y madera seleccionados por cómo se sienten, no solo por cómo se ven.',
  },
  {
    title: 'Diseño que dura',
    text: 'Objetos pensados para acompañarte años, no temporadas — sin tendencias pasajeras.',
  },
  {
    title: 'Pedido sin fricción',
    text: 'Escríbenos por WhatsApp y coordinamos tu pedido de forma directa y personal.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 md:px-10 md:py-28">
      <SectionHeading eyebrow="Por qué Fujiko" title="Cuidamos cada detalle, para que tú no tengas que hacerlo" align="center" />

      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {pillars.map((p, i) => (
          <div key={p.title} className="animate-fadeUp text-center sm:text-left" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="mx-auto mb-5 h-px w-10 bg-moss sm:mx-0" />
            <h3 className="font-display text-lg text-sumi">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sumi2">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
