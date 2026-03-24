'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

const tiers = [
  {
    id: 1,
    name: 'Tier 1: Foundational',
    focus: 'Hygiene & Human-Centric Security',
    details: 'MFA best practices, phishing simulations, password hygiene, and social engineering awareness.',
    skills: ['Social Engineering', 'Phishing', 'MFA Implementation'],
  },
  {
    id: 2,
    name: 'Tier 2: Core Technical',
    focus: 'Digital & RF Perimeter Exploitation',
    details: 'OWASP WSTG, basic Flipper Zero operations, network reconnaissance, and wireless security.',
    skills: ['OWASP', 'RF Analysis', 'NetSec'],
  },
  {
    id: 3,
    name: 'Tier 3: Specialist',
    focus: 'Cloud-Native & AI Red Teaming',
    details: 'Cloud-native penetration testing, LLM security integration, and advanced hardware implants.',
    skills: ['CloudSec', 'LLM Red Teaming', 'Advanced Implants'],
  },
  {
    id: 4,
    name: 'Tier 4: Advanced',
    focus: 'Full Spectrum Operations',
    details: 'Drone ISR, Hak5 suite, high-end lock picking, and autonomous AI security agents.',
    skills: ['Drone ISR', 'Autonomous Agents', 'Full Spectrum'],
  },
]

export default function AcademyList() {
  const [activeTier, setActiveTier] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    gsap.from('.tier-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    })
  }, { scope: containerRef })

  const toggleTier = (id: number) => {
    setActiveTier(activeTier === id ? null : id)
  }

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">Vanguard Academy</h2>
        <p className="text-gray-400 text-lg">Specialized training designed to architect a resilient tomorrow.</p>
        <div className="h-1 w-24 bg-neon-lime mt-4"></div>
      </div>

      <div className="space-y-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="tier-item border-b border-white/10 overflow-hidden"
          >
            <button
              onClick={() => toggleTier(tier.id)}
              className="w-full py-8 flex items-center justify-between text-left group"
            >
              <div>
                <span className="text-neon-lime text-sm font-bold uppercase tracking-widest block mb-2">
                  {tier.focus}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold group-hover:pl-4 transition-all duration-300">
                  {tier.name}
                </h3>
              </div>
              <div className={`text-3xl transition-transform duration-300 ${activeTier === tier.id ? 'rotate-45' : ''}`}>
                +
              </div>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeTier === tier.id ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid md:grid-cols-3 gap-8 px-4">
                <div className="md:col-span-2">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{tier.details}</p>
                  <button className="px-6 py-3 bg-neon-lime text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
                    Enroll in {tier.name.split(':')[0]}
                  </button>
                </div>
                <div className="bg-white/5 p-6 border border-white/10">
                    <h4 className="text-sm font-bold uppercase text-neon-lime mb-4 tracking-widest">Key Skills</h4>
                    <ul className="space-y-2">
                        {tier.skills.map(skill => (
                            <li key={skill} className="flex items-center gap-2 text-gray-400">
                                <div className="w-1.5 h-1.5 bg-neon-lime rounded-full"></div>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
