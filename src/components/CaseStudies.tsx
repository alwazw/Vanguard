'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const cases = [
  {
    title: 'Scattered Spider',
    cost: '£300M',
    type: 'Pretexting / Social Engineering',
    description: 'Advanced social engineering campaign demonstrating why converged physical-cyber defenses are essential against sophisticated threat actors.',
    color: '#00D4FF'
  },
  {
    title: 'Jaguar Land Rover',
    cost: '£1.98B',
    type: 'IT Network Ransomware',
    description: 'Estimated economic damage from ransomware attack exploiting vulnerabilities that converged security testing would have identified.',
    color: '#0066CC'
  },
  {
    title: 'McDonald\'s Breach',
    cost: '64M RECORDS',
    type: 'Weak Default AI Credentials',
    description: 'Massive data exposure from default credentials on AI systems - precisely the vulnerability our penetration testing identifies.',
    color: '#FF4757'
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
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power4.out',
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-16 md:py-32 px-4 md:px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto mb-10 md:mb-20">
        <h2 className="text-3xl md:text-7xl font-bold uppercase mb-4 md:mb-6 tracking-tighter">2025 Threat Landscape</h2>
        <p className="text-gray-500 text-sm md:text-lg max-w-2xl">Real-world economic impact of fragmented security strategies. Average US breach cost: $10M. Mid-market firm impact: up to $29M.</p>
        <div className="h-1 w-24 md:w-32 bg-neon-lime mt-4 md:mt-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
        {cases.map((c) => (
          <div
            key={c.title}
            className="case-card group p-6 md:p-12 border border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between min-h-[350px] md:h-[500px]"
          >
            <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: c.color }}
            ></div>

            <div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-[0.3em] text-gray-500 block mb-2 md:mb-4">{c.type}</span>
              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-6 group-hover:text-white transition-colors">{c.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4 md:mb-8">{c.description}</p>
            </div>

            <div>
              <div className="text-3xl md:text-5xl font-black mb-1 md:mb-2 italic" style={{ color: c.color }}>{c.cost}</div>
              <div className="text-[10px] md:text-xs font-bold uppercase text-gray-600 tracking-wider md:tracking-widest">Total Economic Impact</div>
            </div>

            <div className="absolute -bottom-10 -right-10 text-[80px] md:text-[120px] font-black opacity-[0.03] select-none pointer-events-none group-hover:opacity-10 transition-opacity">
                EXPLOIT
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
