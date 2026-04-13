'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  {
    id: 1,
    name: 'The Strategic Starter',
    price: '$15k - $25k',
    type: 'One-Time',
    features: [
      'Network/Web app pentesting',
      'Flipper Zero hardware demo',
      'SOC 2 / ISO 27001 baseline',
      'Basic vulnerability report',
    ],
    highlight: false,
  },
  {
    id: 2,
    name: 'The Professional Vanguard',
    price: '$35k - $75k',
    type: 'Milestone-Based',
    features: [
      'Internal/External pivoting',
      'API security assessment',
      'Drone signal mapping',
      'O.MG cable implant tests',
      'Detection & response testing',
    ],
    highlight: true,
  },
  {
    id: 3,
    name: 'The Elite Partner',
    price: '$100k+',
    type: 'Annual Retainer',
    features: [
      'Continuous Agentic AI simulations',
      '24/7 tethered drone overwatch',
      'Autonomous ground patrols',
      'vCISO strategic advisory',
      'Priority incident response',
    ],
    highlight: false,
  },
]

export default function DeploymentTiers() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.pricing-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-8 md:py-20 px-4 md:px-6 circuit-pattern relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-5 md:mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 md:w-16 accent-line"></div>
            <span className="text-vanguard-orange text-xs font-mono uppercase tracking-widest">Engagement Models</span>
            <div className="h-px w-8 md:w-16 accent-line" style={{ transform: 'scaleX(-1)' }}></div>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">
            Modular <span className="text-vanguard-orange">Deployment</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
            Choose the engagement level that aligns with your risk profile and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              className={`pricing-card relative border backdrop-blur-sm ${tier.highlight ? 'border-vanguard-orange bg-vanguard-orange/10' : 'border-slate-700/50 bg-noir-dark/60'} p-6 md:p-8 flex flex-col hover:border-vanguard-orange/50 transition-all`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-vanguard-orange text-white text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="text-xs font-mono text-vanguard-amber uppercase tracking-wider mb-2">
                  Tier {tier.id}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-4xl font-black text-vanguard-orange">{tier.price}</span>
                  <span className="text-xs text-slate-500 uppercase">{tier.type}</span>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-vanguard-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-3 md:py-4 font-bold uppercase tracking-widest text-sm transition-all ${
                  tier.highlight 
                    ? 'bg-vanguard-orange text-white hover:bg-vanguard-amber' 
                    : 'border border-white/30 text-white hover:bg-white hover:text-deep-black'
                }`}
              >
                Request Quote
              </button>
            </div>
          ))}
        </div>

        {/* Boutique Advantage */}
        <div className="mt-4 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          <div className="p-4 md:p-8 border border-slate-700/50 bg-noir-dark/60 backdrop-blur-sm">
            <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4 text-vanguard-amber">The Big 4 Legacy</h3>
            <ul className="space-y-3">
              {['Layered, pyramid junior staffing', 'Structured, rigid program management', 'Static automated scanners', 'Scale and compliance focus'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-slate-600">—</span>
                  <span className="text-sm text-slate-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 md:p-8 border border-vanguard-orange/40 bg-vanguard-orange/10 backdrop-blur-sm">
            <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4 text-vanguard-orange">The Vanguard Approach</h3>
            <ul className="space-y-3">
              {['Senior-led, direct access', 'Real-time Time-to-Insight', 'Agentic AI & Edge Robotics', 'Strategic depth & risk mitigation'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-vanguard-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
