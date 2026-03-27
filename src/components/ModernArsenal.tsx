'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const tools = [
  {
    id: 1,
    name: 'Flipper Zero',
    description: 'A portable multi-tool for interacting with radio protocols, RFID, NFC, and infrared. Clones 125kHz badges, emulates TV remotes, performs Bluetooth spamming.',
    capabilities: ['RFID/NFC Cloning', 'IR Emulation', 'Bluetooth Attacks', 'Sub-GHz Analysis'],
  },
  {
    id: 2,
    name: 'O.MG Cable',
    description: 'Appears as a standard USB cable but contains covert microcontrollers for keystroke injection and data exfiltration. A Trojan Horse that executes commands on plug-in.',
    capabilities: ['Keystroke Injection', 'Data Exfiltration', 'Remote Execution', 'Covert Implant'],
  },
  {
    id: 3,
    name: 'Hak5 Ecosystem',
    description: 'WiFi Pineapple Mark VII and Bash Bunny provide advanced platforms for man-in-the-middle attacks and automated payload delivery via USB.',
    capabilities: ['MITM Attacks', 'Rogue AP', 'Payload Delivery', 'Network Recon'],
  },
  {
    id: 4,
    name: 'iCopy-XS & Proxmark',
    description: 'Dedicated RFID cloning tools that decode and replicate high-security badges (e.g., iCLASS SEOS) that standard readers cannot touch.',
    capabilities: ['High-Security Cloning', 'Badge Decoding', 'Access Control Bypass', 'Credential Theft'],
  },
]

export default function ModernArsenal() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeTool, setActiveTool] = useState<number | null>(null)

  useGSAP(() => {
    gsap.from('.arsenal-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-10 md:py-20 px-4 md:px-6 motherboard-bg relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative h-64 md:h-96 lg:h-[500px] order-2 lg:order-1 border border-vanguard-orange/20">
            <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-vanguard-orange/50 z-10"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-vanguard-orange/50 z-10"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-vanguard-orange/50 z-10"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-vanguard-orange/50 z-10"></div>
            <Image
              src="/images/modern-arsenal.jpg"
              alt="Modern Arsenal - Penetration Testing Hardware"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-dark via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 max-w-[60px] accent-line"></div>
              <span className="text-vanguard-orange text-xs font-mono uppercase tracking-widest">Hardware Division</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 tracking-tighter">
              The Modern <span className="text-vanguard-orange">Arsenal</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
              Specialized penetration testing hardware demonstrates the fragility of modern 
              access controls and hardware interfaces that most organizations overlook.
            </p>

            <div className="space-y-3">
              {tools.map((tool) => (
                <div 
                  key={tool.id}
                  className="arsenal-item border border-slate-700/50 bg-noir-dark/60 backdrop-blur-sm overflow-hidden hover:border-vanguard-orange/30 transition-all"
                >
                  <button
                    onClick={() => setActiveTool(activeTool === tool.id ? null : tool.id)}
                    className="w-full p-4 md:p-5 flex items-center justify-between text-left group hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-vanguard-orange/10 border border-vanguard-orange/30 flex items-center justify-center">
                        <svg className="w-5 h-5 text-vanguard-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base font-bold group-hover:text-vanguard-orange transition-colors">{tool.name}</span>
                    </div>
                    <div className={`text-xl transition-transform duration-300 ${activeTool === tool.id ? 'rotate-45' : ''}`}>
                      +
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ${activeTool === tool.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
                      <p className="text-xs md:text-sm text-slate-400 mb-4 leading-relaxed">{tool.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tool.capabilities.map((cap) => (
                          <span key={cap} className="px-2 py-1 text-[10px] md:text-xs bg-vanguard-orange/10 text-vanguard-orange border border-vanguard-orange/30">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
