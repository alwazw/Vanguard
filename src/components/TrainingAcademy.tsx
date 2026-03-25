'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  {
    level: 1,
    name: 'Foundational',
    focus: 'Hygiene, Phishing, MFA',
    description: 'Security awareness and hygiene training. Phishing simulations, MFA best practices, and social engineering awareness.',
    tools: ['Phishing Simulations', 'MFA Implementation', 'Password Hygiene'],
    color: '#FFB800',
  },
  {
    level: 2,
    name: 'Core Technical',
    focus: 'OWASP, Basic Flipper Zero',
    description: 'Infrastructure and web hacking fundamentals. OWASP WSTG methodology and introductory hardware tool usage.',
    tools: ['OWASP WSTG', 'Basic RF Analysis', 'Network Recon'],
    color: '#FF6B35',
  },
  {
    level: 3,
    name: 'Specialist',
    focus: 'Cloud-Native, LLM Integration',
    description: 'Cloud security and AI integration. Mastering LLM security integration and cloud-native penetration testing.',
    tools: ['Cloud Pentesting', 'LLM Security', 'API Exploitation'],
    color: '#FF3B3B',
  },
  {
    level: 4,
    name: 'Advanced Black Belt',
    focus: 'Drone ISR, Hak5 Suite, AI Agents',
    description: 'Full spectrum operations. Drone-based ISR, complete Hak5 mastery, lock picking, and building closed-loop AI offensive agents.',
    tools: ['Drone Operations', 'Hak5 Suite', 'Closed-Loop AI'],
    color: '#FF3B3B',
  },
]

export default function TrainingAcademy() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.tier-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-6 bg-noir-dark relative overflow-hidden">
      <div className="absolute inset-0 hex-overlay opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 border border-vanguard-gold/30 bg-vanguard-gold/5 mb-4">
            <span className="text-vanguard-gold text-xs font-mono uppercase tracking-widest">Training Division</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">
            Vanguard Training <span className="text-vanguard-red">Academy</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto mb-6">
            Empowering internal staff with the same advanced frameworks used by our consultants
          </p>
          
          {/* ROI Stats */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-4 bg-vanguard-red/10 border border-vanguard-red/30">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-vanguard-red">$232K</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase">Avg. Breach Cost Reduction</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-vanguard-red">427%</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase">ROI Over 3 Years</div>
            </div>
          </div>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {tiers.map((tier) => (
            <div 
              key={tier.level}
              className="tier-card relative border border-white/10 bg-slate-950/80 p-6 group hover:border-vanguard-red/50 transition-all duration-300"
            >
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: tier.color }}
              ></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 flex items-center justify-center font-black text-lg"
                  style={{ backgroundColor: `${tier.color}20`, color: tier.color, border: `1px solid ${tier.color}50` }}
                >
                  {tier.level}
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase">Tier {tier.level}</div>
                  <div className="font-bold text-sm md:text-base">{tier.name}</div>
                </div>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: tier.color }}>
                {tier.focus}
              </div>

              <p className="text-xs md:text-sm text-slate-400 mb-4 leading-relaxed">
                {tier.description}
              </p>

              <div className="space-y-2">
                {tier.tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: tier.color }}></div>
                    <span className="text-xs text-slate-500">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hack Lab */}
        <div className="mt-10 md:mt-16 p-6 md:p-10 border border-white/10 bg-slate-950/50">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Practical Immersion: The 3D Hack-Lab</h3>
            <p className="text-sm text-slate-400">Hands-on exercises in realistic environments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Drone Reconnaissance', desc: 'Aerial WiFi mapping' },
              { name: 'RFID/NFC Emulation', desc: 'Badge cloning at entry points' },
              { name: 'Hardware Planting', desc: 'BadUSB scripting' },
              { name: 'AI Red Teaming', desc: 'LLM vulnerabilities' },
            ].map((lab) => (
              <div key={lab.name} className="p-4 border border-vanguard-red/20 bg-vanguard-red/5 text-center">
                <div className="text-xs md:text-sm font-bold text-vanguard-amber mb-1">{lab.name}</div>
                <div className="text-[10px] md:text-xs text-slate-500">{lab.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
