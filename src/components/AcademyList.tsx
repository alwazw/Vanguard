'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

const tiers = [
  {
    id: 1,
    name: 'TIER_1: FOUNDATIONAL',
    focus: 'Human-Centric Security Ops',
    details: 'MFA best practices, advanced phishing simulations, password hygiene, and social engineering awareness.',
    skills: ['Social Engineering', 'Phishing', 'MFA Implementation'],
  },
  {
    id: 2,
    name: 'TIER_2: CORE_TECH',
    focus: 'RF Perimeter Exploitation',
    details: 'OWASP WSTG, advanced Flipper Zero operations, network reconnaissance, and wireless security analysis.',
    skills: ['OWASP', 'RF Analysis', 'NetSec'],
  },
  {
    id: 3,
    name: 'TIER_3: SPECIALIST',
    focus: 'AI / Cloud Red Teaming',
    details: 'Cloud-native penetration testing, LLM security integration, and advanced hardware implants for digital perimeters.',
    skills: ['CloudSec', 'LLM Red Teaming', 'Advanced Implants'],
  },
  {
    id: 4,
    name: 'TIER_4: ELITE_OPS',
    focus: 'Full Spectrum Warfare',
    details: 'Drone ISR, Hak5 suite, high-end lock picking, and autonomous AI security agents for total structural dominance.',
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
      x: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    })
  }, { scope: containerRef })

  const toggleTier = (id: number) => {
    setActiveTier(activeTier === id ? null : id)
  }

  return (
    <section ref={containerRef} className="py-32 px-12 max-w-6xl mx-auto bg-deep-black">
      <div className="mb-24 flex flex-col md:flex-row items-end justify-between border-b border-white/5 pb-12">
        <div>
            <span className="text-neon-lime font-mono text-sm tracking-[0.4em] uppercase mb-4 block animate-pulse">Training & Proficiency</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">VANGUARD_ACADEMY</h2>
        </div>
        <div className="text-right hidden md:block">
            <span className="text-gray-600 font-mono text-xs uppercase tracking-widest leading-loose">SEC_LVL_4_ONLY</span>
        </div>
      </div>

      <div className="space-y-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="tier-item border-b border-white/5 overflow-hidden transition-all duration-300 hover:bg-white/[0.02]"
          >
            <button
              onClick={() => toggleTier(tier.id)}
              className="w-full py-10 flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-12">
                <span className="text-neon-lime font-mono text-xl opacity-40 group-hover:opacity-100 transition-opacity">0{tier.id}</span>
                <div>
                    <span className="text-gray-500 text-xs font-mono font-bold uppercase tracking-[0.3em] block mb-3 group-hover:text-white transition-colors">
                    {tier.focus}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight group-hover:text-neon-lime transition-all duration-300">
                    {tier.name}
                    </h3>
                </div>
              </div>
              <div className={`w-12 h-12 flex items-center justify-center border border-white/10 text-3xl transition-all duration-500 ${activeTier === tier.id ? 'rotate-45 bg-neon-lime border-neon-lime text-white' : 'group-hover:border-neon-lime group-hover:text-neon-lime text-gray-500'}`}>
                +
              </div>
            </button>

            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                activeTier === tier.id ? 'max-h-[800px] opacity-100 py-12' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid md:grid-cols-3 gap-16 px-8 border-l-2 border-neon-lime ml-6">
                <div className="md:col-span-2">
                  <p className="text-gray-400 font-mono text-lg leading-relaxed mb-10 uppercase tracking-wide">{tier.details}</p>
                  <Button size="lg" className="bg-neon-lime text-white hover:bg-white hover:text-black px-10 py-6 text-sm font-bold uppercase tracking-widest transition-all">
                    Enroll in {tier.name.split(':')[0]}
                  </Button>
                </div>
                <div className="bg-[#0c0c0c] p-10 border border-white/5 relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-neon-lime/50" />
                    <h4 className="text-[10px] font-mono font-bold uppercase text-neon-lime mb-6 tracking-[0.3em]">PROFILING_REQUIRED_SKILLS</h4>
                    <ul className="space-y-4">
                        {tier.skills.map(skill => (
                            <li key={skill} className="flex items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 bg-neon-lime/40" />
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
