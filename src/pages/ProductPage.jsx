import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import { useRecentlyViewed } from '../hooks/useRecentlyViewed'
import { formatPrice } from '../utils/format'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import ProductGrid from '../components/product/ProductGrid'
import SectionHeading from '../components/ui/SectionHeading'

const tagLabels = { nuevo: 'Nuevo', bestseller: 'Favorito', temporada: 'Temporada' }

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const recentlyViewed = useRecentlyViewed(product?.id)

  useEffect(() => {
    setActiveImage(0)
    setQuantity(1)
    setAdded(false)
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [slug])

  if (!product) return <Navigate to="/catalogo" replace />

  const related = getRelatedProducts(product, 4)

  const handleAdd = () => {
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="mx-auto max-w-content px-5 py-10 md:px-10 md:py-14">
      <nav className="mb-8 text-xs text-sumi2">
        <Link to="/" className="hover:text-sumi">Inicio</Link>
        <span className="mx-2">/</span>
        <Link to="/catalogo" className="hover:text-sumi">Catálogo</Link>
        <span className="mx-2">/</span>
        <span className="text-sumi">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/5] overflow-hidden bg-washi">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                aria-label={`Ver imagen ${i + 1}`}
                className={`h-20 w-16 overflow-hidden border transition-colors ${
                  activeImage === i ? 'border-sumi' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          {product.tags?.[0] && (
            <Badge tone={product.tags[0] === 'temporada' ? 'accent' : 'neutral'} className="mb-4">
              {tagLabels[product.tags[0]] ?? product.tags[0]}
            </Badge>
          )}
          <h1 className="font-display text-display-md text-sumi">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-lg text-sumi2">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-sumi2/50 line-through">{formatPrice(product.compareAtPrice)}</span>
            )}
          </div>

          <p className="mt-6 max-w-md text-base leading-relaxed text-sumi2">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-beige">
              <button
                className="px-4 py-3 text-sumi2 hover:text-sumi"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Reducir cantidad"
              >
                −
              </button>
              <span className="min-w-[2rem] text-center text-sm">{quantity}</span>
              <button
                className="px-4 py-3 text-sumi2 hover:text-sumi"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>
            <Button onClick={handleAdd} variant="primary" size="lg" className="flex-1">
              {added ? 'Agregado ✓' : 'Agregar al carrito'}
            </Button>
          </div>

          {product.stock <= 15 && (
            <p className="mt-3 text-xs text-sumi2">Quedan pocas unidades disponibles.</p>
          )}

          <div className="mt-10 border-t border-beige pt-8">
            <p className="mb-4 text-xs uppercase tracking-widest text-sumi2">Especificaciones</p>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b border-beige/60 pb-2 text-sm sm:justify-start sm:gap-3">
                  <dt className="text-sumi2">{key}</dt>
                  <dd className="text-sumi">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <SectionHeading eyebrow="También te puede gustar" title="Productos relacionados" />
          <div className="mt-10">
            <ProductGrid products={related} />
          </div>
        </div>
      )}

      {recentlyViewed.length > 0 && (
        <div className="mt-24">
          <SectionHeading eyebrow="Tu recorrido" title="Vistos recientemente" />
          <div className="mt-10">
            <ProductGrid products={recentlyViewed} />
          </div>
        </div>
      )}
    </div>
  )
}
