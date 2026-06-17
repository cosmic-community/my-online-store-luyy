const features = [
  { icon: '💎', title: 'Premium Quality', desc: 'Only the finest engineered gear.' },
  { icon: '🚀', title: 'Latest Equipment', desc: 'Next-gen sports technology.' },
  { icon: '🧠', title: 'Expert Recommendations', desc: 'Guidance from pro athletes.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Champion gear, fair prices.' },
  { icon: '⚡', title: 'Fast Delivery', desc: 'Gear delivered at light speed.' },
  { icon: '🏅', title: 'Trusted by Athletes', desc: 'Backed by 15,000+ champions.' },
]

export default function WhyUs() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-electric-blue tracking-[0.3em] text-xs mb-3 font-display">THE ADVANTAGE</p>
          <h2 className="font-display font-black text-3xl md:text-5xl gradient-text">
            Why Sports Gallery?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`glass rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
                i % 2 === 0 ? 'neon-border-orange' : 'neon-border-blue'
              }`}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}