import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          <span className="font-display font-black tracking-widest">
            <span className="neon-text-orange">SPORTS</span>{' '}
            <span className="neon-text-blue">GALLERY</span>
          </span>
        </Link>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/products" className="hover:text-neon-orange transition-colors">Products</Link>
          <Link href="/categories" className="hover:text-electric-blue transition-colors">Zones</Link>
          <Link href="/reviews" className="hover:text-neon-orange transition-colors">Reviews</Link>
        </div>
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} Sports Gallery · Where Champions Find Their Gear</p>
      </div>
    </footer>
  )
}