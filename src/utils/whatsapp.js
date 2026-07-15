import { brand } from '../config/brand'
import { formatPrice } from './format'

// Builds a clean, readable WhatsApp order message and returns the
// wa.me link ready to open.
export const buildWhatsAppOrderUrl = ({ customer, items, subtotal, total }) => {
  const lines = []

  lines.push(`Hola ${brand.name}! Quiero hacer un pedido 🌿`)
  lines.push('')
  lines.push(`*Nombre:* ${customer.name}`)
  lines.push(`*Ciudad:* ${customer.city}`)
  if (customer.notes?.trim()) {
    lines.push(`*Notas:* ${customer.notes.trim()}`)
  }
  lines.push('')
  lines.push('*Pedido:*')

  items.forEach((item) => {
    lines.push(
      `• ${item.name} — x${item.quantity} — ${formatPrice(item.price * item.quantity)}`
    )
  })

  lines.push('')
  lines.push(`*Subtotal:* ${formatPrice(subtotal)}`)
  lines.push(`*Envío:* A coordinar contigo`)
  lines.push(`*Total:* ${formatPrice(total)}`)

  const message = lines.join('\n')
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`
}
