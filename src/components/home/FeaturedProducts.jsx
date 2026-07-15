import { Link } from 'react-router-dom'
import { getFeaturedProducts } from '../../data/products'
import ProductCard from '../product/ProductCard'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function FeaturedProducts() {
  const products = getFeaturedProducts(8)

  return (
    <section className="mx-auto max-w-content px-5 py-20 md:px-10 md:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Seleccionados por ti"
          title="Los favoritos de siempre"
          description="Piezas que nuestra comunidad vuelve a elegir, una y otra vez."
        />
        <Button as={Link} to="/catalogo" variant="secondary" size="md" className="shrink-0">
          Ver todo
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-4 md:gap-x-8 md:gap-y-14">
        {products.map((product, i) => (
          <div key={product.id} className="animate-fadeUp" style={{ animationDelay: `${i * 60}ms` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}
