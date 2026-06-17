'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const floatingItems = [
  { emoji: '🏏', top: '15%', left: '10%', delay: '0s' },
  { emoji: '⚽', top: '25%', left: '82%', delay: '1s' },
  { emoji: '🏀', top: '60%', left: '8%', delay: '2s' },
  { emoji: '🏸', top: '70%', left: '85%', delay: '0.5s' },
  { emoji: '🏋️', top: '12%', left: '60%', delay: '1.5s' },
  { emoji: '🎾', top: '78%', left: '45%', delay: '2.5s' },
]

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      setOffset({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20"
    >
      {/* Stadium lights glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-orange/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      {/* Floating equipment */}
      {floatingItems.map((item, i) => (
        <div
          key={i}
          className="absolute text-5xl md:text-6xl animate-float opacity-80 select-none"
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          {item.emoji}
        </div>
      ))}

      <div className="relative z-10 px-6 max-w-4xl">
        {/* Holographic sphere */}
        <div className="mx-auto mb-10 w-40 h-40 md:w-52 md:h-52 relative">
          <div className="absolute inset-0 rounded-full neon-border-blue animate-spin-slow" />
          <div className="absolute inset-4 rounded-full neon-border-orange animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl animate-float-slow">
            🏆
          </div>
        </div>

        <p className="text-electric-blue tracking-[0.4em] text-xs md:text-sm mb-4 font-display">
          EST. 2035 · FUTURISTIC SPORTS MEGASTORE
        </p>
        <h1 className="font-display font-black text-5xl md:text-8xl tracking-tight mb-6 gradient-text">
          SPORTS GALLERY
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10 font-light">
          Where Champions Find Their Gear.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="px-8 py-4 rounded-full font-semibold bg-neon-orange text-black shadow-neon-orange hover:scale-105 transition-transform"
          >
            Shop Collection
          </Link>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold neon-border-blue text-electric-blue hover:bg-electric-blue/10 transition-colors"
          >
            Visit Store
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
        <span className="tracking-widest">ENTER THE TUNNEL</span>
        <div className="w-px h-10 bg-gradient-to-b from-electric-blue to-transparent" />
      </div>
    </section>
  )
}