import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products as allProducts } from '../data/products'
import { categories } from '../data/categories'
import ProductGrid from '../components/product/ProductGrid'
import Dropdown from '../components/ui/Dropdown'
import SealMark from '../components/ui/SealMark'

const PAGE_SIZE = 12

const sortOptions = [
  { value: 'relevancia', label: 'Relevancia' },
  { value: 'precio-asc', label: 'Precio: menor a mayor' },
  { value: 'precio-desc', label: 'Precio: mayor a menor' },
  { value: 'nombre', label: 'Nombre (A-Z)' },
]

export default function Catalog() {
  const [params, setParams] = useSearchParams()
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const activeCategory = params.get('categoria') ?? ''
  const activeTag = params.get('tag') ?? ''
  const query = params.get('buscar') ?? ''
  const sort = params.get('orden') ?? 'relevancia'

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [activeCategory, activeTag, query, sort])

  const filtered = useMemo(() => {
    let list = [...allProducts]

    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory)
    }
    if (activeTag) {
      list = list.filter((p) => p.tags.includes(activeTag))
    }
    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }

    switch (sort) {
      case 'precio-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'precio-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'nombre':
        list.sort((a, b) => a.name.localeCompare(b.name, 'es'))
        break
      default:
        break
    }

    return list
  }, [activeCategory, activeTag, query, sort])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const updateParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  return (
    <div className="mx-auto max-w-content px-5 py-12 md:px-10 md:py-16">
      <div className="mb-10 flex items-center gap-3">
        <SealMark />
        <h1 className="font-display text-display-sm text-sumi md:text-display-md">
          {activeCategory
            ? categories.find((c) => c.slug === activeCategory)?.name ?? 'Catálogo'
            : query
            ? `Resultados para "${query}"`
            : 'Catálogo completo'}
        </h1>
      </div>

      <div className="mb-10 flex flex-col gap-6 border-b border-beige pb-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => updateParam('categoria', '')}
            className={`border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
              !activeCategory ? 'border-sumi bg-sumi text-kinari' : 'border-beige text-sumi2 hover:border-sumi/40'
            }`}
          >
            Todos
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => updateParam('categoria', c.slug === activeCategory ? '' : c.slug)}
              className={`border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                activeCategory === c.slug
                  ? 'border-sumi bg-sumi text-kinari'
                  : 'border-beige text-sumi2 hover:border-sumi/40'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <Dropdown
          label="Ordenar"
          options={sortOptions}
          value={sort}
          onChange={(v) => updateParam('orden', v === 'relevancia' ? '' : v)}
        />
      </div>

      <p className="mb-8 text-xs uppercase tracking-widest text-sumi2/70">
        {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
      </p>

      <ProductGrid products={visible} />

      {hasMore && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="border border-sumi/30 px-8 py-3 text-xs uppercase tracking-widest text-sumi transition-colors hover:border-sumi hover:bg-sumi/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss"
          >
            Ver más productos
          </button>
        </div>
      )}
    </div>
  )
}
