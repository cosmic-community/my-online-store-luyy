import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryZones({ categories }: { categories: Category[] }) {
  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-electric-blue tracking-[0.3em] text-xs mb-3 font-display">SPORTS ZONES</p>
          <h2 className="font-display font-black text-3xl md:text-5xl gradient-text">
            Product Universe
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const accent = getMetafieldValue(cat.metadata?.accent_color) || '#ff6b00'
            const emoji = getMetafieldValue(cat.metadata?.icon_emoji) || '🏟️'
            const name = getMetafieldValue(cat.metadata?.name) || cat.title
            const desc = getMetafieldValue(cat.metadata?.description)
            return (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group relative glass rounded-2xl p-8 overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                style={{ boxShadow: `0 0 0 1px ${accent}33` }}
              >
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ backgroundColor: accent }}
                />
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{emoji}</div>
                  <h3 className="font-display font-bold text-xl mb-2" style={{ color: accent }}>
                    {name}
                  </h3>
                  {desc && <p className="text-sm text-gray-400 line-clamp-2">{desc}</p>}
                  <span className="inline-block mt-4 text-xs tracking-widest text-gray-500 group-hover:text-white transition-colors">
                    EXPLORE ZONE →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}