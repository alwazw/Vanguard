'use client'

import { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ROISection() {
  const containerRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [impactValue, setImpactValue] = useState(0)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 70%',
      onEnter: () => setInView(true),
    })

    gsap.from('.roi-content', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
    })
  }, { scope: containerRef })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const startTime = Date.now()
      const target = 29

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setImpactValue(Math.round(target * eased))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [inView])

  return (
    <section ref={containerRef} className="py-10 md:py-20 px-4 md:px-6 hex-grid relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 md:w-16 accent-line"></div>
            <span className="text-vanguard-orange text-xs font-mono uppercase tracking-widest">Financial Analysis</span>
            <div className="h-px w-8 md:w-16 accent-line" style={{ transform: 'scaleX(-1)' }}></div>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">
            The ROI of <span className="text-vanguard-orange">Proactive Resilience</span>
          </h2>
        </div>

        <div className="roi-content grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Cost of Inaction */}
          <div className="p-6 md:p-10 border border-vanguard-orange/40 bg-vanguard-orange/10 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-vanguard-orange/20 blur-3xl"></div>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-vanguard-orange relative z-10">The Cost of Inaction</h3>

            <div className="relative z-10 mb-8">
              <div className="text-5xl md:text-7xl font-black text-vanguard-orange">
                ${impactValue}M
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-wider mt-2">
                Potential Impact for Mid-Market Firms
              </div>
            </div>

            <ul className="space-y-3 relative z-10">
              {[
                '$10 MILLION average US breach cost',
                'UP TO $29 MILLION impact for mid-market firms',
                'Indirect costs: brand erosion, lost customer lifetime value',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-vanguard-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-sm text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cost of Defense */}
          <div className="p-6 md:p-10 border border-slate-700/50 bg-noir-dark/60 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-vanguard-gold/10 blur-3xl"></div>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-vanguard-gold relative z-10">The Cost of Defense</h3>

            <div className="relative z-10 mb-8">
              <div className="text-3xl md:text-4xl font-black text-white">
                Fractional Annual Investment
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-wider mt-2">
                Compared to Breach Impact
              </div>
            </div>

            <ul className="space-y-3 relative z-10">
              {[
                'Fractional annual investment',
                'Continuous compliance validation',
                'Insurance-grade reporting',
                'Proactive threat mitigation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-vanguard-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-sm text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual Comparison Bar */}
        <div className="mt-6 md:mt-10 p-4 md:p-6 border border-slate-700/50 bg-noir-dark/60 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 w-full">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Potential Breach Impact</div>
              <div className="h-8 bg-vanguard-orange/20 border border-vanguard-orange/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-vanguard-orange" style={{ width: '100%' }}></div>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-white">$29M</span>
              </div>
            </div>
            <div className="text-2xl font-black text-slate-600">VS</div>
            <div className="flex-1 w-full">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Annual Defense Investment</div>
              <div className="h-8 bg-vanguard-gold/20 border border-vanguard-gold/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-vanguard-gold" style={{ width: '3%' }}></div>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold text-deep-black">~$100k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
