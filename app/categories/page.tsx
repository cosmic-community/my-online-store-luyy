import { getCategories } from '@/lib/cosmic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CategoryZones from '@/components/CategoryZones'

export const metadata = {
  title: 'Sports Zones — Sports Gallery',
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      <Navbar />
      <div className="pt-24">
        {categories.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No zones available yet.</p>
        ) : (
          <CategoryZones categories={categories} />
        )}
      </div>
      <Footer />
    </main>
  )
}