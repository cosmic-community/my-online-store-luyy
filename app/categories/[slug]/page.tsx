// app/categories/[slug]/page.tsx
import { getCategory, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductPodCard from '@/components/ProductPodCard'
import { notFound } from 'next/navigation'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const emoji = getMetafieldValue(category.metadata?.icon_emoji) || '🏟️'
  const desc = getMetafieldValue(category.metadata?.description)
  const accent = getMetafieldValue(category.metadata?.accent_color) || '#ff6b00'
  const banner = category.metadata?.banner_image

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      <Navbar />
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {banner && (
            <div className="glass rounded-3xl overflow-hidden mb-10 aspect-[3/1] relative">
              <img
                src={`${banner.imgix_url}?w=1600&h=540&fit=crop&auto=format,compress`}
                alt={name}
                width={800}
                height={270}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/30 to-transparent" />
            </div>
          )}

          <div className="text-center mb-14">
            <div className="text-6xl mb-4">{emoji}</div>
            <h1 className="font-display font-black text-4xl md:text-6xl mb-3" style={{ color: accent }}>
              {name}
            </h1>
            {desc && <p className="text-gray-400 max-w-2xl mx-auto">{desc}</p>}
          </div>

          {products.length === 0 ? (
            <p className="text-center text-gray-400">No products in this zone yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, i) => (
                <ProductPodCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}