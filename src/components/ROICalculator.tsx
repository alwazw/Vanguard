'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

const metrics = [
  { label: 'BREACH_COST_AVG', value: 10000000, prefix: '$', suffix: '' },
  { label: 'ROI_3YR_PROJECTED', value: 427, prefix: '', suffix: '%' },
  { label: 'ACADEMY_SAVINGS_VAL', value: 232000, prefix: '$', suffix: '+' },
  { label: 'MID_MARKET_IMPACT', value: 29000000, prefix: '$', suffix: '' },
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
        duration: 2.5,
        onUpdate: function() {
          const progress = this.progress()
          const currentVal = Math.round(progress * metric.value)
          setCounts(prev => {
            const next = [...prev]
            next[index] = currentVal
            return next
          })
        }
      }, index * 0.15)
    })
  }, { scope: containerRef })

  const formatValue = (val: number, prefix: string, suffix: string) => {
    return `${prefix}${val.toLocaleString()}${suffix}`
  }

  return (
    <section ref={containerRef} className="py-32 px-12 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      {/* Background Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-lime/20 animate-[scan_8s_infinite_linear]" />

      <div className="max-w-7xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 items-end gap-12">
        <div>
            <span className="text-neon-lime font-mono text-sm tracking-[0.4em] uppercase mb-4 block animate-pulse">Economic Forensics</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">IMPACT_METRICS</h2>
        </div>
        <p className="text-gray-500 font-mono text-sm max-w-lg leading-relaxed uppercase tracking-wider mb-2">
            Fragmentation of physical and digital security protocols creates systemic vulnerability.
            The following metrics visualize the potential risk mitigation of multi-domain convergence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 max-w-7xl mx-auto bg-white/5">
        {metrics.map((metric, idx) => (
          <div
            key={metric.label}
            className="p-12 border border-white/5 bg-deep-black hover:border-neon-lime transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gray-800 pointer-events-none uppercase">
                MT_ID: {idx + 101}
            </div>

            <h3 className="text-gray-500 uppercase text-[10px] font-mono font-bold tracking-[0.3em] mb-10 block group-hover:text-neon-lime transition-colors">
              {metric.label}
            </h3>
            <div className="text-4xl md:text-6xl font-black text-white group-hover:text-white transition-colors tracking-tight">
              {formatValue(counts[idx], metric.prefix, metric.suffix)}
            </div>

            <div className="mt-12 h-[2px] w-4 bg-neon-lime group-hover:w-full transition-all duration-700 ease-in-out"></div>
          </div>
        ))}
      </div>

      <div className="mt-32 max-w-7xl mx-auto p-1 border border-neon-lime/30 bg-neon-lime/5">
          <div className="p-16 border border-neon-lime/50 bg-deep-black text-center relative overflow-hidden group">
              {/* Scan Overlay */}
              <div className="absolute inset-0 bg-neon-lime opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none" />

              <h2 className="text-4xl md:text-7xl font-black uppercase mb-8 tracking-tighter text-white">STOP_THE_HEMORRHAGE</h2>
              <p className="text-xl font-mono mb-12 max-w-3xl mx-auto text-gray-400 leading-snug uppercase tracking-wide">
                  By 2027, 60% of enterprises will converge physical and cyber security.
                  The Vanguard Protocol is the multi-domain framework you need to survive.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="bg-neon-lime text-white hover:bg-white hover:text-black px-12 py-8 text-xl font-bold uppercase tracking-widest transition-all">
                      Initiate Risk Assessment
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black px-12 py-8 text-xl font-bold uppercase tracking-widest transition-all">
                      Operational Specs
                  </Button>
              </div>
          </div>
      </div>
    </section>
  )
}
