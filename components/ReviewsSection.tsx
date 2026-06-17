import type { Review } from '@/types'
import ReviewCard from '@/components/ReviewCard'

export default function ReviewsSection({ reviews }: { reviews: Review[] }) {
  if (!reviews || reviews.length === 0) {
    return null
  }

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-electric-blue tracking-[0.3em] text-xs mb-3 font-display">VOICES OF CHAMPIONS</p>
          <h2 className="font-display font-black text-3xl md:text-5xl gradient-text">
            Customer Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}