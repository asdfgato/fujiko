import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import Button from '../components/ui/Button'
import SealMark from '../components/ui/SealMark'

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-content flex-col items-center px-5 py-24 text-center md:px-10">
        <p className="font-display text-2xl text-sumi">Tu carrito está vacío</p>
        <p className="mt-3 max-w-sm text-sm text-sumi2">
          Explora el catálogo y encuentra algo que acompañe tus días.
        </p>
        <Button as={Link} to="/catalogo" variant="primary" size="lg" className="mt-8">
          Ver catálogo
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-content px-5 py-12 md:px-10 md:py-16">
      <div className="mb-10 flex items-center gap-3">
        <SealMark />
        <h1 className="font-display text-display-sm text-sumi md:text-display-md">Tu carrito</h1>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_1fr]">
        <ul className="flex flex-col divide-y divide-beige border-y border-beige">
          {items.map((item) => (
            <li key={item.id} className="flex gap-5 py-6">
              <Link to={`/producto/${item.slug}`} className="h-28 w-24 shrink-0 overflow-hidden bg-washi">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <Link to={`/producto/${item.slug}`} className="font-display text-base text-sumi">
                    {item.name}
                  </Link>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xs uppercase tracking-widest text-sumi2/60 hover:text-sumi"
                  >
                    Quitar
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-beige">
                    <button
                      className="px-3 py-2 text-sumi2 hover:text-sumi"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Reducir cantidad"
                    >
                      −
                    </button>
                    <span className="min-w-[1.75rem] text-center text-sm">{item.quantity}</span>
                    <button
                      className="px-3 py-2 text-sumi2 hover:text-sumi"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-sumi">{formatPrice(item.price * item.quantity)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="h-fit border border-beige bg-washi p-6">
          <p className="font-display text-lg text-sumi">Resumen</p>
          <div className="mt-5 flex items-center justify-between text-sm">
            <span className="text-sumi2">Subtotal</span>
            <span className="text-sumi">{formatPrice(subtotal)}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-sumi2">Envío</span>
            <span className="text-sumi2">A coordinar</span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-beige pt-4">
            <span className="font-display text-base text-sumi">Total estimado</span>
            <span className="font-display text-lg text-sumi">{formatPrice(subtotal)}</span>
          </div>
          <Button as={Link} to="/checkout" variant="primary" className="mt-6 w-full">
            Finalizar pedido
          </Button>
          <Link to="/catalogo" className="mt-4 block text-center text-xs uppercase tracking-widest text-sumi2 hover:text-sumi">
            Seguir explorando
          </Link>
        </div>
      </div>
    </div>
  )
}
