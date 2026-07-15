import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { brand } from '../../config/brand'
import { categories } from '../../data/categories'
import { useCart } from '../../context/CartContext'

const navLinks = [
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/catalogo?categoria=agendas', label: 'Agendas' },
  { to: '/catalogo?categoria=diarios', label: 'Diarios' },
  { to: '/nosotros', label: 'Nosotros' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { itemCount, setCartOpen } = useCart()
  const navigate = useNavigate()

  const submitSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/catalogo?buscar=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-beige/70 bg-kinari/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-4 md:px-10">
        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          <span className="block h-px w-5 bg-sumi" />
          <span className="block h-px w-5 bg-sumi" />
        </button>

        <Link to="/" className="font-display text-2xl tracking-wide text-sumi">
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest transition-colors ${
                  isActive ? 'text-moss-dark' : 'text-sumi2 hover:text-sumi'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Buscar"
            onClick={() => setSearchOpen((s) => !s)}
            className="text-sumi2 transition-colors hover:text-sumi focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M13 13L16.5 16.5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
          <button
            aria-label={`Carrito, ${itemCount} artículos`}
            onClick={() => setCartOpen(true)}
            className="relative text-sumi2 transition-colors hover:text-sumi focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 5H16L15 15.5C14.9 16.3 14.2 17 13.3 17H4.7C3.8 17 3.1 16.3 3 15.5L2 5Z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M5.5 5V4A3.5 3.5 0 0 1 12.5 4V5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-moss text-[0.6rem] text-kinari">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-beige/70 bg-kinari px-5 py-4 md:px-10">
          <form onSubmit={submitSearch} className="mx-auto flex max-w-content items-center gap-3">
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar productos…"
              className="w-full border-b border-sumi/30 bg-transparent py-2 text-sm text-sumi placeholder:text-sumi2/50 focus:border-moss focus:outline-none"
            />
            <button type="submit" className="text-xs uppercase tracking-widest text-moss-dark">
              Buscar
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <button aria-label="Cerrar menú" className="absolute inset-0 bg-sumi/40" onClick={() => setMenuOpen(false)} />
          <div className="relative flex h-full w-4/5 max-w-xs flex-col bg-kinari p-6 shadow-2xl animate-fadeUp">
            <button
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
              className="mb-8 self-end text-sumi2"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.5 3.5L14.5 14.5M14.5 3.5L3.5 14.5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-xl text-sumi"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-beige pt-6">
                <p className="mb-3 text-xs uppercase tracking-widest text-sumi2">Categorías</p>
                <div className="flex flex-col gap-3">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/catalogo?categoria=${c.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm text-sumi2"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
