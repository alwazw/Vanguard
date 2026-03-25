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
      { name: 'External Perimeter', desc: 'OSINT, Drones identifying CCTV blind spots, Social Engineering / Tailgating' },
      { name: 'Physical Access', desc: 'Manipulating REX sensors, RFID cloning, Under-the-door tools' },
      { name: 'Hardware Implant', desc: 'Dropping rogue Raspberry Pis, Shark Jacks, or O.MG cables' },
      { name: 'Lateral Cyber Movement', desc: 'Network pivoting, exploiting internal servers, bypassing external firewalls' },
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
    title: 'Continuous Security Validation',
    subtitle: 'Core Service 3',
    offerings: [
      { name: 'vCISO Advisory', desc: 'Strategic guidance, executive reporting, risk quantification' },
      { name: 'Managed Vulnerability Lifecycle', desc: 'Continuous scanning, prioritization, threat mapping' },
      { name: 'Remediation Support', desc: 'Rapid response, patch management, incident recovery' },
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
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-6 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 border border-vanguard-red/30 bg-vanguard-red/5 mb-4">
            <span className="text-vanguard-red text-xs font-mono uppercase tracking-widest">Service Architecture</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">
            Core <span className="text-vanguard-red">Services</span>
          </h2>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`service-tab px-4 md:px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
                activeService === service.id
                  ? 'bg-vanguard-red text-white'
                  : 'border border-white/20 text-slate-400 hover:border-vanguard-red/50 hover:text-white'
              }`}
            >
              {service.subtitle}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="border border-white/10 bg-noir-dark p-6 md:p-10">
          <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
            {currentService?.title}
          </h3>

          {/* Service 1: Nodes */}
          {activeService === 1 && currentService?.nodes && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {currentService.nodes.map((node, idx) => (
                <div key={node.name} className="relative p-6 border border-white/10 bg-slate-950/50 group hover:border-vanguard-red/50 transition-all">
                  <div className="absolute -top-3 left-4 px-2 py-1 bg-vanguard-red text-white text-xs font-bold">
                    NODE {idx + 1}
                  </div>
                  <h4 className="text-sm md:text-base font-bold mb-3 mt-2 text-vanguard-amber">{node.name}</h4>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{node.desc}</p>
                  {idx < currentService.nodes.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 text-vanguard-red text-2xl">→</div>
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
                  <div key={feature.desc} className="text-center p-6 border border-vanguard-red/20 bg-vanguard-red/5">
                    <div className="text-4xl md:text-5xl font-black text-vanguard-red mb-3">{feature.stat}</div>
                    <p className="text-xs md:text-sm text-slate-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 border border-white/10 bg-slate-950/50">
                <h4 className="text-vanguard-amber font-bold mb-3 text-sm uppercase tracking-wider">Closed-Loop Malware Iteration</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Continuous AI-driven adaptation cycle: Deploy payload → EDR detects → AI ingests telemetry → 
                  Code morphs at machine speed → Evasion achieved. This cycle takes minutes, not days.
                </p>
              </div>
            </div>
          )}

          {/* Service 3: Offerings */}
          {activeService === 3 && currentService?.offerings && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentService.offerings.map((offering) => (
                <div key={offering.name} className="p-6 border border-white/10 bg-slate-950/50 hover:border-vanguard-red/50 transition-all">
                  <div className="w-12 h-12 bg-vanguard-red/10 border border-vanguard-red/30 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-vanguard-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h4 className="text-base md:text-lg font-bold mb-2 text-vanguard-amber">{offering.name}</h4>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{offering.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
