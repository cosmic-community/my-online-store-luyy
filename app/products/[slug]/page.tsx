// app/products/[slug]/page.tsx
import { getProduct } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  const name = getMetafieldValue(product.metadata?.name) || product.title
  const description = getMetafieldValue(product.metadata?.description)
  const brand = getMetafieldValue(product.metadata?.brand)
  const status = getMetafieldValue(product.metadata?.inventory_status)
  const price = product.metadata?.price
  const salePrice = product.metadata?.sale_price
  const image = product.metadata?.featured_image
  const gallery = product.metadata?.gallery || []
  const category = product.metadata?.category
  const specs = product.metadata?.specifications

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      <Navbar />
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/products" className="text-sm text-gray-400 hover:text-neon-orange transition-colors mb-8 inline-block">
            ← Back to all products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
            <div>
              <div className="glass rounded-3xl overflow-hidden neon-border-blue aspect-square">
                {image ? (
                  <img
                    src={`${image.imgix_url}?w=1000&h=1000&fit=crop&auto=format,compress`}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-8xl">🏟️</div>
                )}
              </div>
              {gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {gallery.slice(0, 4).map((img, i) => (
                    <div key={i} className="glass rounded-xl overflow-hidden aspect-square">
                      <img
                        src={`${img.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                        alt={`${name} ${i + 1}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              {brand && <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">{brand}</p>}
              <h1 className="font-display font-black text-3xl md:text-5xl mb-4 gradient-text">{name}</h1>

              {status && (
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold glass-strong text-electric-blue mb-6">
                  {status}
                </span>
              )}

              <div className="flex items-center gap-3 mb-8">
                {typeof salePrice === 'number' && salePrice > 0 ? (
                  <>
                    <span className="font-display font-black text-4xl neon-text-orange">${salePrice}</span>
                    {typeof price === 'number' && (
                      <span className="text-xl text-gray-500 line-through">${price}</span>
                    )}
                  </>
                ) : (
                  typeof price === 'number' && (
                    <span className="font-display font-black text-4xl neon-text-blue">${price}</span>
                  )
                )}
              </div>

              {description && (
                <p className="text-gray-300 leading-relaxed mb-8">{description}</p>
              )}

              {category && (
                <Link
                  href={`/categories/${category.slug}`}
                  className="inline-block px-5 py-2 rounded-full text-sm neon-border-orange text-neon-orange hover:bg-neon-orange/10 transition-colors mb-8"
                >
                  {getMetafieldValue(category.metadata?.icon_emoji)} {getMetafieldValue(category.metadata?.name) || category.title}
                </Link>
              )}

              {specs && typeof specs === 'object' && (
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display font-bold text-lg mb-4 neon-text-blue">Specifications</h3>
                  <dl className="space-y-2">
                    {Object.entries(specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm border-b border-white/5 pb-2">
                        <dt className="text-gray-500 capitalize">{key.replace(/_/g, ' ')}</dt>
                        <dd className="text-gray-200">{getMetafieldValue(value)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}