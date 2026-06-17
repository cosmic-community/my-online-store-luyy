import type { Product } from '@/types'
import ProductPodCard from '@/components/ProductPodCard'

export default function ProductPods({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return null
  }

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-neon-orange tracking-[0.3em] text-xs mb-3 font-display">FLOATING POD GALLERY</p>
          <h2 className="font-display font-black text-3xl md:text-5xl gradient-text">
            Featured Equipment
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductPodCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}