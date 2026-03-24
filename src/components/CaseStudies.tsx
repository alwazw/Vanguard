'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const cases = [
  {
    title: 'Scattered Spider Campaign',
    cost: '£300M',
    type: 'Social Engineering + Physical Breach',
    description: 'A multi-domain campaign that leveraged advanced pretexting and physical access to bypass modern MFA perimeters.',
    color: '#B6FF3B'
  },
  {
    title: 'Jaguar Land Rover Impact',
    cost: '£1.98B',
    type: 'Critical Infrastructure Failure',
    description: 'Total economic impact resulting from ransomware targeting unpatched physical hardware vulnerabilities.',
    color: '#3B7BFF'
  },
  {
    title: 'McDonald\'s Records',
    cost: '64M RECORDS',
    type: 'Default AI Credentials',
    description: 'Exposure of millions of customer records due to weak default credentials on physically deployed AI systems.',
    color: '#FF3B7B'
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
    <section ref={containerRef} className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl md:text-7xl font-bold uppercase mb-6 tracking-tighter">Asymmetric Case Studies</h2>
        <p className="text-gray-500 text-lg max-w-2xl">Visualizing the real-world economic impact of fragmented security strategies.</p>
        <div className="h-1 w-32 bg-neon-lime mt-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cases.map((c) => (
          <div
            key={c.title}
            className="case-card group p-12 border border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between h-[500px]"
          >
            <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: c.color }}
            ></div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 block mb-4">{c.type}</span>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-white transition-colors">{c.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">{c.description}</p>
            </div>

            <div>
              <div className="text-5xl font-black mb-2 italic" style={{ color: c.color }}>{c.cost}</div>
              <div className="text-xs font-bold uppercase text-gray-600 tracking-widest">Total Economic Impact</div>
            </div>

            <div className="absolute -bottom-10 -right-10 text-[120px] font-black opacity-[0.03] select-none pointer-events-none group-hover:opacity-10 transition-opacity">
                EXPLOIT
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
