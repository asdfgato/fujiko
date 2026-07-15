import ProductCard from './ProductCard'

export default function ProductGrid({ products, emptyMessage = 'No encontramos productos con esos filtros.' }) {
  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-xl text-sumi">{emptyMessage}</p>
        <p className="mt-2 text-sm text-sumi2">Prueba ajustando la búsqueda o los filtros.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-8 md:gap-y-14">
      {products.map((product, i) => (
        <div key={product.id} className="animate-fadeUp" style={{ animationDelay: `${(i % 8) * 40}ms` }}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
