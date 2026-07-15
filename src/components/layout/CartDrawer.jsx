import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/format'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

export default function CartDrawer() {
  const { items, isCartOpen, setCartOpen, updateQuantity, removeItem, subtotal } = useCart()

  return (
    <Modal open={isCartOpen} onClose={() => setCartOpen(false)} title={`Tu carrito (${items.length})`} side="right">
      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <p className="font-display text-lg text-sumi">Tu carrito está vacío</p>
          <p className="text-sm text-sumi2">Explora el catálogo y encuentra algo para acompañar tus días.</p>
          <Button as={Link} to="/catalogo" variant="secondary" onClick={() => setCartOpen(false)}>
            Ver catálogo
          </Button>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <Link
                    to={`/producto/${item.slug}`}
                    onClick={() => setCartOpen(false)}
                    className="h-24 w-20 shrink-0 overflow-hidden bg-washi"
                  >
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/producto/${item.slug}`}
                        onClick={() => setCartOpen(false)}
                        className="text-sm text-sumi"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Quitar ${item.name}`}
                        className="text-sumi2/60 transition-colors hover:text-sumi"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-beige">
                        <button
                          className="px-2.5 py-1 text-sumi2 hover:text-sumi"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Reducir cantidad"
                        >
                          −
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm">{item.quantity}</span>
                        <button
                          className="px-2.5 py-1 text-sumi2 hover:text-sumi"
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
          </div>
          <div className="border-t border-beige px-6 py-6">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-sumi2">Subtotal</span>
              <span className="font-display text-lg text-sumi">{formatPrice(subtotal)}</span>
            </div>
            <p className="mb-4 text-xs text-sumi2">El envío se coordina contigo por WhatsApp.</p>
            <Button
              as={Link}
              to="/checkout"
              onClick={() => setCartOpen(false)}
              variant="primary"
              className="w-full"
            >
              Finalizar pedido
            </Button>
          </div>
        </>
      )}
    </Modal>
  )
}
