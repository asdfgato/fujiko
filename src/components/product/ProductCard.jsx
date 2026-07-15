import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/format'
import { useCart } from '../../context/CartContext'
import Badge from '../ui/Badge'

const tagLabels = {
  nuevo: 'Nuevo',
  bestseller: 'Favorito',
  temporada: 'Temporada',
}

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative flex flex-col">
      <Link
        to={`/producto/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-washi focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            loading="lazy"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-soft group-hover:opacity-100"
          />
        )}
        {product.tags?.[0] && (
          <div className="absolute left-3 top-3">
            <Badge tone={product.tags[0] === 'temporada' ? 'accent' : 'neutral'}>
              {tagLabels[product.tags[0]] ?? product.tags[0]}
            </Badge>
          </div>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            addItem(product, 1)
          }}
          className="absolute inset-x-3 bottom-3 translate-y-2 bg-sumi/90 py-2.5 text-center text-[0.65rem] uppercase tracking-widest text-kinari opacity-0 backdrop-blur-sm transition-all duration-300 ease-soft group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss"
        >
          Agregar al carrito
        </button>
      </Link>
      <Link to={`/producto/${product.slug}`} className="mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss">
        <h3 className="font-body text-sm text-sumi">{product.name}</h3>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-sm text-sumi2">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-sumi2/50 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </Link>
    </div>
  )
}
