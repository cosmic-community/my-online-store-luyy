'use client'

import { useState } from 'react'

const contactMethods = [
  { icon: '💬', label: 'WhatsApp', value: '+1 (555) 010-2035', accent: 'orange' },
  { icon: '📞', label: 'Phone', value: '+1 (555) 700-9000', accent: 'blue' },
  { icon: '✉️', label: 'Email', value: 'hello@sportsgallery.dev', accent: 'orange' },
  { icon: '📍', label: 'Store', value: '2035 Stadium Blvd, Future City', accent: 'blue' },
]

export default function ContactCommandCenter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-neon-orange tracking-[0.3em] text-xs mb-3 font-display">DIGITAL COMMAND CENTER</p>
          <h2 className="font-display font-black text-3xl md:text-5xl gradient-text">
            Contact & Store
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactMethods.map((m) => (
              <div
                key={m.label}
                className={`glass rounded-2xl p-6 ${
                  m.accent === 'orange' ? 'neon-border-orange' : 'neon-border-blue'
                }`}
              >
                <div className="text-3xl mb-3">{m.icon}</div>
                <p className="text-xs tracking-widest text-gray-500 uppercase mb-1">{m.label}</p>
                <p className="text-sm font-medium">{m.value}</p>
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-2xl p-8 neon-border-blue">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="font-display font-bold text-xl mb-2 neon-text-orange">Transmission Received!</h3>
                <p className="text-sm text-gray-400">Our champions team will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-space-panel/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-electric-blue transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-space-panel/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-electric-blue transition-colors"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-space-panel/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-electric-blue transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold bg-neon-orange text-black shadow-neon-orange hover:scale-[1.02] transition-transform"
                >
                  Send Transmission
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}