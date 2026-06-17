import type { Product } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ImmersiveGallery({ products }: { products: Product[] }) {
  const withImages = products.filter((p) => p.metadata?.featured_image).slice(0, 8)

  if (withImages.length === 0) {
    return null
  }

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-neon-orange tracking-[0.3em] text-xs mb-3 font-display">IMMERSIVE GALLERY</p>
          <h2 className="font-display font-black text-3xl md:text-5xl gradient-text">
            Equipment In Space
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {withImages.map((p, i) => {
            const image = p.metadata?.featured_image
            const name = getMetafieldValue(p.metadata?.name) || p.title
            if (!image) return null
            return (
              <div
                key={p.id}
                className={`group relative rounded-2xl overflow-hidden glass ${
                  i % 3 === 0 ? 'md:row-span-2' : ''
                }`}
              >
                <img
                  src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                  alt={name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-sm font-semibold neon-text-orange">{name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}