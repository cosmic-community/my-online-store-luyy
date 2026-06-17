import type { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-neon-orange' : 'text-gray-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          style={i < rating ? { filter: 'drop-shadow(0 0 4px rgba(255,107,0,0.7))' } : {}}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  const name = getMetafieldValue(review.metadata?.reviewer_name) || review.title
  const text = getMetafieldValue(review.metadata?.review_text)
  const ratingRaw = review.metadata?.rating
  const rating = typeof ratingRaw === 'number' ? ratingRaw : parseInt(getMetafieldValue(ratingRaw) || '5', 10)
  const avatar = review.metadata?.avatar
  const floatClass = index % 2 === 0 ? 'animate-float' : 'animate-float-slow'

  return (
    <div
      className={`glass rounded-2xl p-6 neon-border-blue ${floatClass}`}
      style={{ animationDelay: `${(index % 3) * 0.6}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover neon-border-orange"
          />
        ) : (
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-space-panel text-xl">
            🏆
          </div>
        )}
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <StarRating rating={isNaN(rating) ? 5 : rating} />
        </div>
      </div>
      {text && <p className="text-sm text-gray-300 leading-relaxed">&ldquo;{text}&rdquo;</p>}
    </div>
  )
}