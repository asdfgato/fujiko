import { Link } from 'react-router-dom'
import { brand } from '../../config/brand'
import { categories } from '../../data/categories'
import NewsletterForm from '../newsletter/NewsletterForm'

export default function Footer() {
  return (
    <footer className="bg-sumi text-kinari">
      <div className="mx-auto max-w-content px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-2xl">{brand.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-kinari/60">
              {brand.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest text-kinari/70 transition-colors hover:text-kinari"
              >
                Instagram
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="text-xs uppercase tracking-widest text-kinari/70 transition-colors hover:text-kinari"
              >
                {brand.email}
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-kinari/50">Categorías</p>
            <ul className="flex flex-col gap-3">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/catalogo?categoria=${c.slug}`}
                    className="text-sm text-kinari/70 transition-colors hover:text-kinari"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-kinari/50">Fujiko</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/nosotros" className="text-sm text-kinari/70 transition-colors hover:text-kinari">
                  Nuestra historia
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-sm text-kinari/70 transition-colors hover:text-kinari">
                  Catálogo completo
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${brand.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-kinari/70 transition-colors hover:text-kinari"
                >
                  Escríbenos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-kinari/50">
              Historias, no promociones
            </p>
            <p className="mb-4 text-sm text-kinari/60">
              Una nota ocasional sobre objetos nuevos y pequeños rituales.
            </p>
            <NewsletterForm tone="dark" />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-kinari/15 pt-8 text-xs text-kinari/40 md:flex-row">
          <p>© {new Date().getFullYear()} {brand.legalName}. {brand.shippingNote}.</p>
          <p>Hecho con calma en {brand.city}.</p>
        </div>
      </div>
    </footer>
  )
}
