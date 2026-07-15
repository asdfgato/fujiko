import { brand } from '../../config/brand'

const seeds = ['ig-1', 'ig-2', 'ig-3', 'ig-4', 'ig-5', 'ig-6']

export default function InstagramGallery() {
  return (
    <section className="bg-washi">
      <div className="mx-auto max-w-content px-5 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <p className="font-display text-display-sm text-sumi">Síguenos {brand.instagramHandle}</p>
          <p className="text-sm text-sumi2">Momentos cotidianos, compartidos por nuestra comunidad.</p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:grid-cols-6">
          {seeds.map((seed) => (
            <a
              key={seed}
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss"
            >
              <img
                src={`https://picsum.photos/seed/fujiko-${seed}/500/500`}
                alt="Publicación de Instagram de Fujiko"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sumi/0 transition-colors duration-300 group-hover:bg-sumi/20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
