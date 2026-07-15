import { Link } from 'react-router-dom'
import { getSeasonalProducts } from '../../data/products'
import ProductCard from '../product/ProductCard'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function SeasonalCollection() {
  const products = getSeasonalProducts(6)
  if (!products.length) return null

  return (
    <section className="mx-auto max-w-content px-5 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Colección de temporada"
            title="Fuyu — la calma del invierno"
            description="Una edición limitada pensada para los días cortos: tonos nieve, texturas suaves y rituales que invitan a quedarse en casa."
          />
          <Button as={Link} to="/catalogo?tag=temporada" variant="accent" size="md" className="mt-8 w-fit">
            Ver colección
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
