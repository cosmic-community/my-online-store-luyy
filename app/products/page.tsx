import { getProducts } from '@/lib/cosmic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductPodCard from '@/components/ProductPodCard'

export const metadata = {
  title: 'All Products — Sports Gallery',
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      <Navbar />
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-neon-orange tracking-[0.3em] text-xs mb-3 font-display">FULL COLLECTION</p>
            <h1 className="font-display font-black text-4xl md:text-6xl gradient-text">All Equipment</h1>
          </div>

          {products.length === 0 ? (
            <p className="text-center text-gray-400">No products available yet.</p>
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