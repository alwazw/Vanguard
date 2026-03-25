'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const pillars = [
  {
    id: 1,
    title: 'Converged Penetration Testing',
    description: 'Advanced physical-cyber infiltration combining OSINT, drone reconnaissance, RFID cloning, hardware implants, and lateral network movement to identify vulnerabilities before adversaries do.',
    icon: 'target',
    size: 'col-span-12 md:col-span-8',
  },
  {
    id: 2,
    title: 'AI-Driven Red Teaming',
    description: 'Agentic AI orchestration executing cyber campaigns 108x faster than traditional methods with continuous closed-loop malware iteration.',
    icon: 'cpu',
    size: 'col-span-12 md:col-span-4',
  },
  {
    id: 3,
    title: 'Remediation Deployment',
    description: 'Strategic guidance, managed vulnerability lifecycle, rapid response patch management, and incident recovery support.',
    icon: 'shield',
    size: 'col-span-12 md:col-span-4',
  },
  {
    id: 4,
    title: 'Vanguard Training Academy',
    description: 'Four-tier certification from foundational hygiene to advanced drone ISR and autonomous AI agents. Reduces average breach cost by $232,000 with up to 427% ROI.',
    icon: 'graduation',
    size: 'col-span-12 md:col-span-8',
  },
]

const iconMap: Record<string, React.ReactNode> = {
  target: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  cpu: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  ),
  shield: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  graduation: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M22 10l-10-5L2 10l10 5 10-5z" />
      <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" />
      <line x1="22" y1="10" x2="22" y2="16" />
    </svg>
  ),
}

export default function ServiceGrid() {
  const containerRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    gsap.from('.pillar-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    })
  }, { scope: containerRef })

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const glitch = card.querySelector('.glitch-overlay')
    gsap.to(glitch, { opacity: 0.1, duration: 0.1, repeat: 3, yoyo: true })
    gsap.to(card, { borderColor: '#B6FF3B', duration: 0.3 })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const glitch = card.querySelector('.glitch-overlay')
    gsap.to(glitch, { opacity: 0, duration: 0.3 })
    gsap.to(card, { borderColor: 'rgba(255, 255, 255, 0.1)', duration: 0.3 })
  }

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">Core Services</h2>
        <div className="h-1 w-24 bg-neon-lime"></div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className={`${pillar.size} pillar-card relative p-10 border border-white/10 bg-white/5 backdrop-blur-sm group overflow-hidden cursor-none`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="glitch-overlay absolute inset-0 bg-white opacity-0 pointer-events-none transition-opacity duration-300"></div>
            <div className="text-neon-lime mb-6">{iconMap[pillar.icon]}</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-lime transition-colors">
              {pillar.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{pillar.description}</p>

            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-neon-lime text-sm uppercase tracking-widest font-bold">Explore</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
