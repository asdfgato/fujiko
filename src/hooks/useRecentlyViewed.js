import { useCallback, useEffect, useState } from 'react'
import { products } from '../data/products'

const STORAGE_KEY = 'fujiko:recently-viewed'
const LIMIT = 6

export function useRecentlyViewed(currentProductId) {
  const [ids, setIds] = useState([])

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      setIds(raw ? JSON.parse(raw) : [])
    } catch {
      setIds([])
    }
  }, [])

  useEffect(() => {
    if (!currentProductId) return
    setIds((prev) => {
      const next = [currentProductId, ...prev.filter((id) => id !== currentProductId)].slice(0, LIMIT)
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProductId])

  return products.filter((p) => ids.includes(p.id) && p.id !== currentProductId).slice(0, 4)
}

export const clearRecentlyViewed = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}
