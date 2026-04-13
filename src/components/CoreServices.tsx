'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    title: 'Converged Physical-Cyber Infiltration',
    subtitle: 'Core Service 1',
    nodes: [
      { name: 'External Perimeter', desc: 'OSINT, Drones identifying CCTV blind spots, Social Engineering / Tailgating', icon: 'target' },
      { name: 'Physical Access', desc: 'Manipulating REX sensors, RFID cloning, Under-the-door tools', icon: 'key' },
      { name: 'Hardware Implant', desc: 'Dropping rogue Raspberry Pis, Shark Jacks, or O.MG cables', icon: 'chip' },
      { name: 'Lateral Cyber Movement', desc: 'Network pivoting, exploiting internal servers, bypassing firewalls', icon: 'network' },
    ],
  },
  {
    id: 2,
    title: 'Advanced AI-Driven Red Teaming',
    subtitle: 'Core Service 2',
    features: [
      { stat: '80-90%', desc: 'of cyber espionage campaigns executed autonomously' },
      { stat: '24%', desc: 'AI outperforms human phishing benchmarks' },
      { stat: '108x', desc: 'acceleration in execution speed vs. human teams' },
    ],
  },
  {
    id: 3,
    title: 'Vanguard Training Academy',
    subtitle: 'Core Service 3',
    tiers: [
      { name: 'Tier 1: Foundational', desc: 'Hygiene, Phishing, MFA' },
      { name: 'Tier 2: Core Technical', desc: 'OWASP, Basic Flipper Zero' },
      { name: 'Tier 3: Specialist', desc: 'Cloud-native pentesting, LLM integration' },
      { name: 'Tier 4: Advanced Black Belt', desc: 'Drone ISR, Hak5 suite, Lock picking, Closed-loop AI' },
    ],
  },
]

export default function CoreServices() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeService, setActiveService] = useState(1)

  useGSAP(() => {
    gsap.from('.service-tab', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    })
  }, { scope: containerRef })

  const currentService = services.find(s => s.id === activeService)

  return (
    <section ref={containerRef} className="py-8 md:py-20 px-4 md:px-6 circuit-pattern relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4 md:mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 md:w-24 accent-line"></div>
            <span className="text-vanguard-orange text-xs font-mono uppercase tracking-widest">Service Architecture</span>
            <div className="h-px w-12 md:w-24 accent-line" style={{ transform: 'scaleX(-1)' }}></div>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">
            Core <span className="text-vanguard-orange">Services</span>
          </h2>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`service-tab px-4 md:px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
                activeService === service.id
                  ? 'bg-vanguard-orange text-white glow-orange'
                  : 'border border-slate-600 text-slate-400 hover:border-vanguard-orange/50 hover:text-white'
              }`}
            >
              {service.subtitle}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="bg-noir-medium/50 border border-vanguard-orange/10 backdrop-blur-sm p-4 md:p-8">
          <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
            {currentService?.title}
          </h3>

          {/* Service 1: Nodes */}
          {activeService === 1 && currentService?.nodes && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {currentService.nodes.map((node, idx) => (
                <div key={node.name} className="relative p-6 border border-slate-700/50 bg-noir-dark/60 backdrop-blur-sm group hover:border-vanguard-orange/50 transition-all">
                  <div className="absolute -top-3 left-4 px-2 py-1 bg-vanguard-orange text-white text-xs font-bold">
                    NODE {idx + 1}
                  </div>
                  <h4 className="text-sm md:text-base font-bold mb-3 mt-2 text-vanguard-amber">{node.name}</h4>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{node.desc}</p>
                  {idx < currentService.nodes.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-vanguard-orange text-xl font-mono">→</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Service 2: AI Features */}
          {activeService === 2 && currentService?.features && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentService.features.map((feature) => (
                  <div key={feature.desc} className="text-center p-6 border border-vanguard-orange/20 bg-vanguard-orange/5 backdrop-blur-sm">
                    <div className="text-4xl md:text-5xl font-black text-vanguard-orange mb-3 text-glow">{feature.stat}</div>
                    <p className="text-xs md:text-sm text-slate-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 border border-slate-700/50 bg-noir-dark/60 backdrop-blur-sm">
                <h4 className="text-vanguard-amber font-bold mb-3 text-sm uppercase tracking-wider">Closed-Loop Malware Iteration</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Continuous AI-driven adaptation cycle: Deploy payload → EDR detects → AI ingests telemetry → 
                  Code morphs at machine speed → Evasion achieved. This cycle takes minutes, not days.
                </p>
              </div>
            </div>
          )}

          {/* Service 3: Training Tiers */}
          {activeService === 3 && currentService?.tiers && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-vanguard-orange font-mono text-sm">Reduces average breach cost by <span className="text-2xl font-bold">$232,000</span></p>
                <p className="text-slate-400 text-xs mt-1">Up to 427% ROI over 3 years</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.tiers.map((tier, idx) => (
                  <div key={tier.name} className="p-6 border border-slate-700/50 bg-noir-dark/60 backdrop-blur-sm hover:border-vanguard-orange/50 transition-all flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-vanguard-orange/10 border border-vanguard-orange/30 text-vanguard-orange font-mono font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-1 text-white">{tier.name}</h4>
                      <p className="text-xs md:text-sm text-slate-400">{tier.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
