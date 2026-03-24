'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const pillars = [
  {
    id: 1,
    title: 'Kinetic Penetration',
    description: 'Bypassing physical security perimeters, biometric access, and structural vulnerabilities.',
    code: 'OPS-KIN-01',
    size: 'col-span-12 md:col-span-8',
  },
  {
    id: 2,
    title: 'SIGINT / Cyber',
    description: 'Signals intelligence and deep-network exploitation for total digital dominance.',
    code: 'OPS-SIG-04',
    size: 'col-span-12 md:col-span-4',
  },
  {
    id: 3,
    title: 'Threat Intel',
    description: 'Predictive modeling of adversary behavior and structural fortification strategy.',
    code: 'OPS-INT-09',
    size: 'col-span-12 md:col-span-4',
  },
  {
    id: 4,
    title: 'Vanguard Academy',
    description: 'Specialized training for rapid-response teams. Tactical proficiency for the modern battlefield.',
    code: 'OPS-EDU-12',
    size: 'col-span-12 md:col-span-8',
  },
]

export default function ServiceGrid() {
  const containerRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    gsap.from('.pillar-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    })
  }, { scope: containerRef })

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    gsap.to(card, { borderColor: '#E31C25', backgroundColor: 'rgba(227, 28, 37, 0.05)', duration: 0.3 })
    gsap.to(card.querySelector('.scanline'), { opacity: 1, duration: 0.2 })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    gsap.to(card, { borderColor: 'rgba(255, 255, 255, 0.1)', backgroundColor: 'transparent', duration: 0.3 })
    gsap.to(card.querySelector('.scanline'), { opacity: 0, duration: 0.2 })
  }

  return (
    <section ref={containerRef} className="py-32 px-6 max-w-7xl mx-auto bg-deep-black">
      <div className="mb-20 flex items-end justify-between border-b border-white/10 pb-8">
        <div>
            <span className="text-tactical-red font-mono text-sm tracking-widest uppercase mb-2 block">Operational Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Core Pillars</h2>
        </div>
        <div className="text-right hidden md:block">
            <span className="text-gray-600 font-mono text-xs uppercase tracking-widest">SEC_LEVEL: ALPHA</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-1 border-white/10">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className={`${pillar.size} pillar-card relative p-12 border border-white/10 group overflow-hidden transition-colors duration-500`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Scanline Effect on Hover */}
            <div className="scanline absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(227,28,37,0.05)_50%)] bg-[length:100%_4px] opacity-0 pointer-events-none" />

            <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-mono text-gray-500 tracking-[0.3em]">{pillar.code}</span>
                <div className="w-2 h-2 bg-tactical-red opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>

            <h3 className="text-3xl font-black mb-6 uppercase tracking-tight group-hover:text-white transition-colors">
              {pillar.title}
            </h3>
            <p className="text-gray-400 leading-relaxed font-mono text-sm max-w-md">{pillar.description}</p>

            <div className="mt-12 flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="h-[1px] w-8 bg-tactical-red" />
                <span className="text-tactical-red text-xs uppercase tracking-widest font-bold">Details // Required</span>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-transparent group-hover:border-tactical-red transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
