import { getFeaturedProducts, getProducts, getCategories, getReviews } from '@/lib/cosmic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsWall from '@/components/StatsWall'
import CategoryZones from '@/components/CategoryZones'
import ProductPods from '@/components/ProductPods'
import WhyUs from '@/components/WhyUs'
import ImmersiveGallery from '@/components/ImmersiveGallery'
import ReviewsSection from '@/components/ReviewsSection'
import ContactCommandCenter from '@/components/ContactCommandCenter'
import Footer from '@/components/Footer'

export default async function HomePage() {
  const [featured, allProducts, categories, reviews] = await Promise.all([
    getFeaturedProducts(),
    getProducts(),
    getCategories(),
    getReviews(),
  ])

  const podProducts = featured.length > 0 ? featured : allProducts.slice(0, 6)

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      <Navbar />
      <Hero />
      <StatsWall />
      <CategoryZones categories={categories} />
      <ProductPods products={podProducts} />
      <WhyUs />
      <ImmersiveGallery products={allProducts} />
      <ReviewsSection reviews={reviews} />
      <ContactCommandCenter />
      <Footer />
    </main>
  )
}