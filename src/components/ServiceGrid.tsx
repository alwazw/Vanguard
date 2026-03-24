'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const pillars = [
  {
    id: 1,
    title: 'Physical Penetration Testing',
    description: 'Mapping CCTV blind spots, lock picking, and aerial reconnaissance via drone ISR.',
    icon: '🏢',
    size: 'col-span-12 md:col-span-8',
  },
  {
    id: 2,
    title: 'Cyber Exploitation',
    description: 'Advanced network infiltration, hardware implants, and digital forensic analysis.',
    icon: '💻',
    size: 'col-span-12 md:col-span-4',
  },
  {
    id: 3,
    title: 'Vulnerability Assessment',
    description: 'Holistic scanning across physical and digital perimeters to identify asymmetric threats.',
    icon: '🔍',
    size: 'col-span-12 md:col-span-4',
  },
  {
    id: 4,
    title: 'Vanguard Academy',
    description: 'Tiered training for operational teams and C-suite, reducing breach costs by $232k+.',
    icon: '🎓',
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
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">Consulting Pillars</h2>
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
            <div className="text-4xl mb-6">{pillar.icon}</div>
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
