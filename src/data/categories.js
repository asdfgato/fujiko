// Categories power the catalog filters, the homepage category grid and
// product tagging. Add a new object here to introduce a new category —
// no other code needs to change.

export const categories = [
  {
    slug: 'cuadernos',
    name: 'Cuadernos',
    description: 'Páginas en blanco para ideas que aún no tienen forma.',
    image: 'https://picsum.photos/seed/fujiko-cat-cuadernos/900/1100',
  },
  {
    slug: 'agendas',
    name: 'Agendas',
    description: 'Organiza tus días con calma y claridad.',
    image: 'https://picsum.photos/seed/fujiko-cat-agendas/900/1100',
  },
  {
    slug: 'diarios',
    name: 'Diarios',
    description: 'Un espacio íntimo para pensar despacio.',
    image: 'https://picsum.photos/seed/fujiko-cat-diarios/900/1100',
  },
  {
    slug: 'escritura',
    name: 'Bolígrafos y lápices',
    description: 'Herramientas precisas para el gesto de escribir.',
    image: 'https://picsum.photos/seed/fujiko-cat-escritura/900/1100',
  },
  {
    slug: 'washi-tape',
    name: 'Washi Tape',
    description: 'Color y textura para tus páginas y proyectos.',
    image: 'https://picsum.photos/seed/fujiko-cat-washi/900/1100',
  },
  {
    slug: 'stickers',
    name: 'Stickers',
    description: 'Pequeños detalles que alegran lo cotidiano.',
    image: 'https://picsum.photos/seed/fujiko-cat-stickers/900/1100',
  },
  // Future categories (commented as reference for how the brand will grow):
  // { slug: 'escritorio', name: 'Accesorios de escritorio', ... }
  // { slug: 'hogar', name: 'Objetos para el hogar', ... }
]

export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug)

export default categories
