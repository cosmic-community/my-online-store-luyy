'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          <span className="font-display font-black text-lg tracking-widest">
            <span className="neon-text-orange">SPORTS</span>{' '}
            <span className="neon-text-blue">GALLERY</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/products" className="hover:text-neon-orange transition-colors">Products</Link>
          <Link href="/categories" className="hover:text-electric-blue transition-colors">Zones</Link>
          <Link href="/reviews" className="hover:text-neon-orange transition-colors">Reviews</Link>
          <a href="#contact" className="hover:text-electric-blue transition-colors">Contact</a>
        </div>
        <Link
          href="/products"
          className="px-5 py-2 rounded-full text-sm font-semibold neon-border-orange text-neon-orange hover:bg-neon-orange/10 transition-colors"
        >
          Shop Collection
        </Link>
      </div>
    </nav>
  )
}