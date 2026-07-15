import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import SectionHeading from '../ui/SectionHeading'

export default function FeaturedCategories() {
  const featured = categories.slice(0, 4)

  return (
    <section className="bg-washi">
      <div className="mx-auto max-w-content px-5 py-20 md:px-10 md:py-28">
        <SectionHeading
          eyebrow="Explora por categoría"
          title="Cada objeto tiene su lugar"
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/catalogo?categoria=${cat.slug}`}
              className="group relative block aspect-[3/4] overflow-hidden animate-fadeUp focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sumi/70 via-sumi/0 to-sumi/0" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                <p className="font-display text-lg text-kinari md:text-xl">{cat.name}</p>
                <p className="mt-1 hidden text-xs text-kinari/70 sm:block">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
