'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'

const metrics = [
  { label: 'Average Breach Cost', value: 10000000, prefix: '$', suffix: '' },
  { label: 'Potential ROI (3 Years)', value: 427, prefix: '', suffix: '%' },
  { label: 'Savings via Vanguard Academy', value: 232000, prefix: '$', suffix: '+' },
  { label: 'Mid-Market Breach Impact', value: 29000000, prefix: '$', suffix: '' },
]

export default function ROICalculator() {
  const containerRef = useRef<HTMLDivElement>(null!)
  const [counts, setCounts] = useState(metrics.map(() => 0))

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    })

    metrics.forEach((metric, index) => {
      tl.to({}, {
        duration: 2,
        onUpdate: function() {
          const progress = this.progress()
          const currentVal = Math.round(progress * metric.value)
          setCounts(prev => {
            const next = [...prev]
            next[index] = currentVal
            return next
          })
        }
      }, index * 0.2)
    })
  }, { scope: containerRef })

  const formatValue = (val: number, prefix: string, suffix: string) => {
    return `${prefix}${val.toLocaleString()}${suffix}`
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-6 bg-white/5 backdrop-blur-md border-y border-white/10">
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">The ROI of Proactive Resilience</h2>
        <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            The cost of inaction versus the cost of defense. A fractional annual investment
            delivers continuous compliance validation and proactive threat mitigation.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
        {metrics.map((metric, idx) => (
          <div
            key={metric.label}
            className="p-4 md:p-10 border border-white/10 bg-black/50 hover:border-neon-lime transition-all duration-300 group"
          >
            <h3 className="text-gray-400 uppercase text-[10px] md:text-xs font-bold tracking-wider md:tracking-[0.2em] mb-2 md:mb-4">
              {metric.label}
            </h3>
            <div className="text-xl md:text-5xl font-bold text-white group-hover:text-neon-lime transition-colors">
              {formatValue(counts[idx], metric.prefix, metric.suffix)}
            </div>

            <div className="mt-4 md:mt-8 h-1 w-0 bg-neon-lime group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-20 max-w-4xl mx-auto p-6 md:p-12 bg-neon-lime text-black text-center">
          <h2 className="text-2xl md:text-5xl font-black uppercase mb-4 md:mb-6 italic tracking-tight">Initiate Vanguard Protocol</h2>
          <p className="text-base md:text-xl font-bold mb-6 md:mb-8 max-w-2xl mx-auto opacity-80 leading-snug">
              Move decisively and secure the multi-domain landscape before the adversary does.
              Continuous security validation through physical audits, AI orchestration, and elite training.
          </p>
          <button className="px-8 md:px-12 py-4 md:py-5 bg-black text-white font-bold uppercase tracking-widest text-sm md:text-lg hover:bg-white hover:text-black transition-all">
              Request Assessment
          </button>
      </div>
    </section>
  )
}
