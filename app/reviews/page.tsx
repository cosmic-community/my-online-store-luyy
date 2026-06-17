import { getReviews } from '@/lib/cosmic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ReviewCard from '@/components/ReviewCard'

export const metadata = {
  title: 'Customer Reviews — Sports Gallery',
}

export default async function ReviewsPage() {
  const reviews = await getReviews()

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      <Navbar />
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-electric-blue tracking-[0.3em] text-xs mb-3 font-display">VOICES OF CHAMPIONS</p>
            <h1 className="font-display font-black text-4xl md:text-6xl gradient-text">Customer Reviews</h1>
          </div>

          {reviews.length === 0 ? (
            <p className="text-center text-gray-400">No reviews yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <ReviewCard key={review.id} review={review} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}