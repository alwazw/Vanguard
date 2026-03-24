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
    <section ref={containerRef} className="py-24 px-6 bg-white/5 backdrop-blur-md border-y border-white/10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">Impact Metrics</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The traditional siloed approach to security is no longer viable.
            Visualize the potential impact of physical and cyber security convergence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {metrics.map((metric, idx) => (
          <div
            key={metric.label}
            className="p-10 border border-white/10 bg-black/50 hover:border-neon-lime transition-all duration-300 group"
          >
            <h3 className="text-gray-400 uppercase text-xs font-bold tracking-[0.2em] mb-4">
              {metric.label}
            </h3>
            <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-neon-lime transition-colors">
              {formatValue(counts[idx], metric.prefix, metric.suffix)}
            </div>

            <div className="mt-8 h-1 w-0 bg-neon-lime group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto p-12 bg-neon-lime text-black text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 italic tracking-tight">Stop the hemorrhage</h2>
          <p className="text-xl font-bold mb-8 max-w-2xl mx-auto opacity-80 leading-snug">
              60% of enterprises will converge physical and cyber security by 2027.
              The Vanguard Protocol is the multi-domain framework you need.
          </p>
          <button className="px-12 py-5 bg-black text-white font-bold uppercase tracking-widest text-lg hover:bg-white hover:text-black transition-all">
              Initiate Risk Assessment
          </button>
      </div>
    </section>
  )
}
