'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const robotics = [
  {
    id: 1,
    name: 'Reconnaissance Drones',
    image: '/images/tactical-drone.jpg',
    capabilities: [
      'LiDAR and thermal imaging for facility mapping',
      'CCTV blind spot identification',
      'Wi-Fi and signal mapping via SDR',
      'Hardware planting on rooftops',
      'Tethered 24/7 aerial overwatch',
    ],
    description: 'UAVs equipped with advanced sensors to map wireless footprints, identify security gaps, and deliver payloads to otherwise inaccessible locations.',
  },
  {
    id: 2,
    name: 'Autonomous Rovers',
    image: '/images/tactical-rover.jpg',
    capabilities: [
      '3D mapping and computer vision navigation',
      'Stealth patrol operations',
      'Physical access control testing',
      'Interior vulnerability identification',
      'Autonomous ground surveillance',
    ],
    description: 'Ground-based robots programmed for stealth patrols, using computer vision to navigate interior spaces and identify vulnerabilities in physical access controls.',
  },
]

export default function TacticalRobotics() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.robotics-card')
    
    if (cards) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        x: (i) => i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
    }
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-6 bg-noir-dark relative overflow-hidden">
      <div className="absolute inset-0 hex-overlay opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 border border-vanguard-amber/30 bg-vanguard-amber/5 mb-4">
            <span className="text-vanguard-amber text-xs font-mono uppercase tracking-widest">Edge Robotics Division</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">
            Tactical <span className="text-vanguard-red">Robotics</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
            The proliferation of low-cost, high-capability drones has redefined the economics of 
            perimeter security. A $20,000 DIY drone can challenge systems designed for multi-million dollar threats.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {robotics.map((robot) => (
            <div 
              key={robot.id} 
              className="robotics-card border border-white/10 bg-slate-950/80 overflow-hidden group"
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <Image
                  src={robot.image}
                  alt={robot.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{robot.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">{robot.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase text-vanguard-amber tracking-wider mb-3">Capabilities</h4>
                  {robot.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-vanguard-red rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs md:text-sm text-slate-400">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Command Center */}
        <div className="mt-10 md:mt-16 p-6 md:p-10 border border-vanguard-red/30 bg-vanguard-red/5 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">The AI-Powered Command Center</h3>
          <p className="text-sm md:text-base text-slate-400 max-w-3xl mx-auto mb-6">
            Multi-domain telemetry from drones, rovers, and hardware implants feeds into our 
            AI Core for agentic orchestration, creating an offense-informed defense loop.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Physical Inputs', 'Cyber Inputs', 'AI Orchestration', 'Defense Loop'].map((item) => (
              <div key={item} className="px-4 py-3 border border-vanguard-red/30 bg-deep-black">
                <span className="text-xs font-bold text-vanguard-red uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
