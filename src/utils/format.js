import { brand } from '../config/brand'

export const formatPrice = (value) =>
  new Intl.NumberFormat(brand.locale, {
    style: 'currency',
    currency: brand.currency,
    maximumFractionDigits: 0,
  }).format(value)
