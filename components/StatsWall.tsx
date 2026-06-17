'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  label: string
  target: number
  suffix: string
}

const stats: Stat[] = [
  { label: 'Customers', target: 15000, suffix: '+' },
  { label: 'Products', target: 1000, suffix: '+' },
  { label: 'Satisfaction', target: 98, suffix: '%' },
  { label: 'Brands', target: 50, suffix: '+' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const startTime = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            setCount(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsWall() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto glass-strong rounded-3xl p-10 neon-border-blue">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-black text-3xl md:text-5xl gradient-text mb-2">
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm tracking-widest text-gray-400 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}