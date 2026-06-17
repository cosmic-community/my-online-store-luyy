import Link from 'next/link'
import type { Product } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProductPodCard({ product, index = 0 }: { product: Product; index?: number }) {
  const name = getMetafieldValue(product.metadata?.name) || product.title
  const brand = getMetafieldValue(product.metadata?.brand)
  const status = getMetafieldValue(product.metadata?.inventory_status)
  const price = product.metadata?.price
  const salePrice = product.metadata?.sale_price
  const image = product.metadata?.featured_image

  const floatClass = index % 2 === 0 ? 'animate-float' : 'animate-float-slow'

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative block ${floatClass}`}
      style={{ animationDelay: `${(index % 4) * 0.4}s` }}
    >
      <div className="glass rounded-3xl overflow-hidden neon-border-blue transition-all duration-300 group-hover:shadow-neon-orange group-hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden bg-space-panel">
          {image ? (
            <img
              src={`${image.imgix_url}?w=700&h=700&fit=crop&auto=format,compress`}
              alt={name}
              width={350}
              height={350}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">🏟️</div>
          )}
          {status && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider glass-strong text-electric-blue">
              {status}
            </span>
          )}
        </div>
        <div className="p-5">
          {brand && <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-1">{brand}</p>}
          <h3 className="font-semibold text-base mb-2 line-clamp-1 group-hover:neon-text-orange transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            {typeof salePrice === 'number' && salePrice > 0 ? (
              <>
                <span className="font-display font-bold text-lg neon-text-orange">${salePrice}</span>
                {typeof price === 'number' && (
                  <span className="text-sm text-gray-500 line-through">${price}</span>
                )}
              </>
            ) : (
              typeof price === 'number' && (
                <span className="font-display font-bold text-lg neon-text-blue">${price}</span>
              )
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}