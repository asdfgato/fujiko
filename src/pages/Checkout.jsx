import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import { buildWhatsAppOrderUrl } from '../utils/whatsapp'
import { Input, TextArea } from '../components/ui/Input'
import Button from '../components/ui/Button'
import SealMark from '../components/ui/SealMark'

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', city: '', notes: '' })
  const [errors, setErrors] = useState({})

  if (items.length === 0) {
    return <Navigate to="/carrito" replace />
  }

  const onChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Ingresa tu nombre.'
    if (!form.city.trim()) next.city = 'Ingresa tu ciudad.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const url = buildWhatsAppOrderUrl({
      customer: form,
      items,
      subtotal,
      total: subtotal,
    })

    window.open(url, '_blank', 'noopener,noreferrer')
    clearCart()
  }

  return (
    <div className="mx-auto max-w-content px-5 py-12 md:px-10 md:py-16">
      <div className="mb-10 flex items-center gap-3">
        <SealMark />
        <h1 className="font-display text-display-sm text-sumi md:text-display-md">Finalizar pedido</h1>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          <p className="text-sm leading-relaxed text-sumi2">
            No procesamos pagos en línea todavía. Al confirmar, abriremos WhatsApp
            con tu pedido listo para enviarnos — ahí coordinamos el pago y el envío.
          </p>

          <Input
            id="name"
            label="Nombre completo"
            placeholder="Tu nombre"
            value={form.name}
            onChange={onChange('name')}
            error={errors.name}
            required
          />
          <Input
            id="city"
            label="Ciudad"
            placeholder="Ej. Bogotá"
            value={form.city}
            onChange={onChange('city')}
            error={errors.city}
            required
          />
          <TextArea
            id="notes"
            label="Notas (opcional)"
            placeholder="Instrucciones de entrega, empaque de regalo, etc."
            rows={4}
            value={form.notes}
            onChange={onChange('notes')}
          />

          <Button type="submit" variant="whatsapp" size="lg" className="mt-2 w-full">
            Realizar pedido por WhatsApp
          </Button>
          <Link to="/carrito" className="text-center text-xs uppercase tracking-widest text-sumi2 hover:text-sumi">
            Volver al carrito
          </Link>
        </form>

        <div className="h-fit border border-beige bg-washi p-6">
          <p className="mb-5 font-display text-lg text-sumi">Tu pedido</p>
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-sumi2">
                  {item.name} <span className="text-sumi2/60">×{item.quantity}</span>
                </span>
                <span className="shrink-0 text-sumi">{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between border-t border-beige pt-4">
            <span className="font-display text-base text-sumi">Total estimado</span>
            <span className="font-display text-lg text-sumi">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-3 text-xs text-sumi2">El costo de envío se confirma por WhatsApp según tu ciudad.</p>
        </div>
      </div>
    </div>
  )
}
