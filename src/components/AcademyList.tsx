'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

const tiers = [
  {
    id: 1,
    name: 'Tier 1: Foundational',
    focus: 'Hygiene, Phishing, MFA',
    details: 'Essential security hygiene, multi-factor authentication best practices, phishing recognition and simulation exercises, and social engineering awareness for all personnel.',
    skills: ['Password Hygiene', 'Phishing Defense', 'MFA Implementation'],
  },
  {
    id: 2,
    name: 'Tier 2: Core Technical',
    focus: 'OWASP & Hardware Basics',
    details: 'OWASP Web Security Testing Guide, basic Flipper Zero operations, network reconnaissance fundamentals, and RF security foundations.',
    skills: ['OWASP WSTG', 'Flipper Zero Basics', 'Network Recon'],
  },
  {
    id: 3,
    name: 'Tier 3: Specialist',
    focus: 'Cloud-Native & LLM Integration',
    details: 'Cloud-native penetration testing methodologies, LLM security integration, advanced API security, and specialized hardware implant deployment.',
    skills: ['Cloud Pentesting', 'LLM Security', 'API Exploitation'],
  },
  {
    id: 4,
    name: 'Tier 4: Advanced Black Belt',
    focus: 'Full Spectrum Operations',
    details: 'Drone-based ISR operations, complete Hak5 suite mastery, advanced lock picking techniques, and closed-loop AI agent deployment for autonomous security validation.',
    skills: ['Drone ISR', 'Hak5 Suite', 'Closed-Loop AI Agents'],
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
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <div className="mb-10 md:mb-16">
        <h2 className="text-3xl md:text-6xl font-bold uppercase mb-4">Vanguard Academy</h2>
        <p className="text-gray-400 text-sm md:text-lg">Reduces average breach cost by $232,000 with up to 427% ROI over 3 years.</p>
        <div className="h-1 w-24 bg-neon-lime mt-4"></div>
      </div>

      <div className="space-y-2 md:space-y-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="tier-item border-b border-white/10 overflow-hidden"
          >
            <button
              onClick={() => toggleTier(tier.id)}
              className="w-full py-4 md:py-8 flex items-center justify-between text-left group"
            >
              <div className="flex-1 min-w-0 pr-4">
                <span className="text-neon-lime text-xs md:text-sm font-bold uppercase tracking-wider md:tracking-widest block mb-1 md:mb-2">
                  {tier.focus}
                </span>
                <h3 className="text-lg md:text-4xl font-bold group-hover:pl-2 md:group-hover:pl-4 transition-all duration-300 truncate md:whitespace-normal">
                  {tier.name}
                </h3>
              </div>
              <div className={`text-2xl md:text-3xl flex-shrink-0 transition-transform duration-300 ${activeTier === tier.id ? 'rotate-45' : ''}`}>
                +
              </div>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeTier === tier.id ? 'max-h-[600px] opacity-100 py-4 md:py-6' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-2 md:px-4">
                <div className="md:col-span-2">
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">{tier.details}</p>
                  <button className="w-full md:w-auto px-6 py-3 bg-neon-lime text-black font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white transition-colors">
                    Enroll in {tier.name.split(':')[0]}
                  </button>
                </div>
                <div className="bg-white/5 p-4 md:p-6 border border-white/10 mt-4 md:mt-0">
                    <h4 className="text-xs md:text-sm font-bold uppercase text-neon-lime mb-3 md:mb-4 tracking-widest">Key Skills</h4>
                    <ul className="space-y-2">
                        {tier.skills.map(skill => (
                            <li key={skill} className="flex items-center gap-2 text-gray-400 text-sm">
                                <div className="w-1.5 h-1.5 bg-neon-lime rounded-full flex-shrink-0"></div>
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
