'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const cases = [
  {
    title: 'SCATTERED_SPIDER',
    cost: '£300M',
    type: 'Social Engineering // Physical',
    description: 'Bypassing modern MFA via coordinated pretexting and physical access. Systemic collapse of multi-domain security.',
    color: '#E31C25'
  },
  {
    title: 'JLR_INFRASTRUCTURE',
    cost: '£1.98B',
    type: 'Critical HW Failure // Ransomware',
    description: 'Total economic impact of targeting unpatched physical hardware vulnerabilities in global supply chains.',
    color: '#E31C25'
  },
  {
    title: 'MCDONALD_RECORDS',
    cost: '64M RECS',
    type: 'AI System Breach // Defaults',
    description: 'Mass exploitation of default credentials on physically deployed AI infrastructure. Total exposure of data perimeters.',
    color: '#E31C25'
  }
]

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    gsap.from('.case-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-32 px-12 bg-deep-black border-y border-white/5">
      <div className="max-w-7xl mx-auto mb-24 flex flex-col md:flex-row items-end justify-between">
        <div>
            <span className="text-tactical-red font-mono text-sm tracking-[0.4em] uppercase mb-4 block animate-pulse">Impact Visualizer</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">CASE_STUDIES</h2>
        </div>
        <div className="text-right hidden md:block">
            <span className="text-gray-500 font-mono text-xs uppercase tracking-widest leading-loose">
                DATA_VISUALIZATION_v4.2<br />
                ENCRYPTED_FEED_01
            </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-7xl mx-auto bg-white/5">
        {cases.map((c) => (
          <div
            key={c.title}
            className="case-card group p-12 bg-deep-black relative overflow-hidden flex flex-col justify-between h-[600px] border border-white/5 transition-all duration-500 hover:border-tactical-red/30"
          >
            {/* Header */}
            <div>
              <div className="flex justify-between items-center mb-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-tactical-red">{c.type}</span>
                  <div className="w-1.5 h-1.5 bg-tactical-red animate-pulse" />
              </div>
              <h3 className="text-4xl font-black mb-8 group-hover:text-white transition-colors uppercase tracking-tight leading-none">{c.title}</h3>
              <p className="text-gray-500 font-mono text-sm leading-relaxed mb-8 uppercase tracking-wide border-l border-white/10 pl-6">{c.description}</p>
            </div>

            {/* Bottom Section */}
            <div>
              <div className="text-5xl font-black mb-4 text-white group-hover:text-tactical-red transition-colors duration-300">{c.cost}</div>
              <div className="text-[10px] font-bold uppercase text-gray-600 tracking-[0.3em]">Total Economic Impact</div>
            </div>

            {/* Decorative Grid Overlay */}
            <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8px] text-white">
                0x{Math.random().toString(16).substr(2, 8).toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
