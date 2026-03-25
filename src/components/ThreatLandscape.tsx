'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const threats = [
  {
    name: "McDonald's",
    type: 'Weak Default AI Credentials',
    impact: '64M records exposed',
    color: '#FF3B3B'
  },
  {
    name: 'Scattered Spider',
    type: 'Pretexting / Social Engineering',
    impact: '£300M cost',
    color: '#FF6B35'
  },
  {
    name: 'Ivanti / SonicWall',
    type: 'VPN Zero-Day Exploits',
    impact: '17+ orgs infiltrated',
    color: '#FFB800'
  },
  {
    name: 'Jaguar Land Rover',
    type: 'IT Network Ransomware',
    impact: '£1.98B damage',
    color: '#FF3B3B'
  },
]

const stats = [
  { value: '$10M', label: 'Average US Breach Cost (2025)' },
  { value: '$5.3M', label: 'Global Average' },
  { value: '$29M', label: 'Mid-Market Firm Impact' },
]

export default function ThreatLandscape() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.threat-card')
    const statItems = containerRef.current?.querySelectorAll('.stat-item')
    
    if (cards) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      })
    }

    if (statItems) {
      gsap.from(statItems, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      })
    }
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-6 bg-noir-dark relative overflow-hidden">
      <div className="absolute inset-0 hex-overlay opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 border border-vanguard-red/30 bg-vanguard-red/5 mb-4">
            <span className="text-vanguard-red text-xs font-mono uppercase tracking-widest">Asymmetric Threat Analysis</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">
            2025 Threat <span className="text-vanguard-red">Landscape</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
            Real-world economic impact of fragmented security strategies
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center p-4 md:p-6 border border-white/5 bg-white/5">
              <div className="text-2xl md:text-5xl font-black text-vanguard-red mb-2">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Threat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {threats.map((threat) => (
            <div 
              key={threat.name} 
              className="threat-card p-6 border border-white/10 bg-slate-950/50 relative group hover:border-vanguard-red/50 transition-all duration-300"
            >
              <div 
                className="absolute top-0 left-0 w-full h-1 transition-all duration-300"
                style={{ backgroundColor: threat.color }}
              ></div>
              <div className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: threat.color }}>
                {threat.type}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {threat.name}
              </h3>
              <div className="text-xl md:text-2xl font-black" style={{ color: threat.color }}>
                {threat.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
