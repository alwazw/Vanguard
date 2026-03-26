'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const operations = [
  {
    id: 'drone-recon',
    title: 'Drone-Incurred Reconnaissance',
    subtitle: 'Aerial WiFi Mapping',
    description: 'Tactical drones scan building perimeters for wireless signals, identifying vulnerable access points and CCTV blind spots from above.',
    image: '/images/drone-recon.jpg',
    stats: [
      { label: 'Signal Range', value: '500m' },
      { label: 'Scan Time', value: '< 15min' },
      { label: 'Detection Rate', value: '99.2%' },
    ]
  },
  {
    id: 'rover-infiltration',
    title: 'Autonomous Ground Patrols',
    subtitle: 'Covert Physical Access',
    description: 'Miniaturized rovers navigate air ducts, crawl spaces, and restricted areas to plant hardware implants and capture intelligence.',
    image: '/images/rover-infiltration.jpg',
    stats: [
      { label: 'Clearance', value: '6 inch' },
      { label: 'Battery Life', value: '8hrs' },
      { label: 'Stealth Rating', value: 'Silent' },
    ]
  },
  {
    id: 'data-exfil',
    title: 'Data Exfiltration Testing',
    subtitle: 'Lateral Cyber Movement',
    description: 'Once physical access is achieved, we test network pivoting capabilities, exploiting internal servers while bypassing external firewalls.',
    image: '/images/data-exfil.jpg',
    stats: [
      { label: 'Transfer Rate', value: '10Gbps' },
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Trace', value: 'Zero' },
    ]
  },
]

export default function TacticalOperations() {
  const containerRef = useRef<HTMLElement>(null!)
  const [activeOp, setActiveOp] = useState(0)

  useGSAP(() => {
    gsap.from('.op-title', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-10 md:py-20 px-4 md:px-6 motherboard-bg relative">
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-[100px] accent-line"></div>
          <span className="text-vanguard-orange text-xs font-mono uppercase tracking-widest">Tactical Capabilities</span>
        </div>
        <h2 className="op-title text-3xl md:text-6xl font-bold uppercase tracking-tight mb-4">
          Multi-Domain <span className="text-vanguard-orange">Attack Vectors</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-lg max-w-2xl">
          Physical infiltration capabilities that feed AI-orchestrated cyber operations. 
          The traditional perimeter is obsolete.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        <div className="space-y-4">
          {operations.map((op, idx) => (
            <button
              key={op.id}
              onClick={() => setActiveOp(idx)}
              className={`w-full text-left p-4 md:p-6 transition-all duration-500 backdrop-blur-sm ${
                activeOp === idx 
                  ? 'bg-noir-medium/60 border border-vanguard-orange/50' 
                  : 'bg-noir-dark/30 border border-transparent hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 flex items-center justify-center border ${
                  activeOp === idx ? 'border-vanguard-orange bg-vanguard-orange/10' : 'border-slate-700'
                }`}>
                  <span className={`font-mono text-lg ${activeOp === idx ? 'text-vanguard-orange' : 'text-slate-500'}`}>
                    0{idx + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-vanguard-amber text-xs font-mono uppercase tracking-wider">{op.subtitle}</span>
                  <h3 className={`text-lg md:text-xl font-bold mt-1 ${activeOp === idx ? 'text-white' : 'text-slate-300'}`}>
                    {op.title}
                  </h3>
                  {activeOp === idx && (
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">{op.description}</p>
                  )}
                </div>
              </div>
              
              {activeOp === idx && (
                <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-slate-700/50">
                  {op.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-vanguard-orange font-mono text-lg md:text-xl font-bold">{stat.value}</div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="h-[250px] md:h-[400px] lg:sticky lg:top-20">
          <div className="relative w-full h-full bg-noir-medium/40 border border-vanguard-orange/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-vanguard-orange/50 z-10"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-vanguard-orange/50 z-10"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-vanguard-orange/50 z-10"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-vanguard-orange/50 z-10"></div>
            
            <Image
              src={operations[activeOp].image}
              alt={operations[activeOp].title}
              fill
              className="object-cover opacity-70"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-noir-dark via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-vanguard-orange rounded-full animate-pulse"></div>
                <span className="text-vanguard-orange text-xs font-mono uppercase">LIVE FEED</span>
              </div>
              <div className="font-mono text-xs text-slate-400">
                <span className="text-vanguard-amber">&gt;</span> {operations[activeOp].subtitle.toLowerCase().replace(/ /g, '_')}
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
