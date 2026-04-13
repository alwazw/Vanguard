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
    color: '#FF6B35'
  },
  {
    name: 'Scattered Spider',
    type: 'Pretexting / Social Engineering',
    impact: '£300M cost',
    color: '#FF9500'
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
    color: '#FF6B35'
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
    <section ref={containerRef} className="py-8 md:py-20 px-4 md:px-6 hex-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4 md:mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 md:w-16 accent-line"></div>
            <span className="text-vanguard-orange text-xs font-mono uppercase tracking-widest">Multi-Domain Framework</span>
            <div className="h-px w-8 md:w-16 accent-line" style={{ transform: 'scaleX(-1)' }}></div>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold uppercase mb-4 tracking-tighter">
            The Collapse of the <span className="text-vanguard-orange">Perimeter</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-3xl mx-auto mb-6">
            The distinction between a physical breach and a cyber catastrophe is functionally 
            non-existent. 60% of enterprises will converge physical and cyber security operations by 2027.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center p-3 md:p-6 border border-vanguard-orange/20 bg-noir-medium/40 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl md:text-5xl font-black text-vanguard-orange text-glow mb-1 md:mb-2">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Threat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {threats.map((threat) => (
            <div 
              key={threat.name} 
              className="threat-card p-6 border border-slate-700/50 bg-noir-dark/60 backdrop-blur-sm relative group hover:border-vanguard-orange/50 transition-all duration-300"
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
