'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import NetworkTopology from './NetworkTopology'

export default function Hero() {
  const container = useRef<HTMLDivElement>(null!)
  const titleRef = useRef<HTMLHeadingElement>(null!)
  const subtitleRef = useRef<HTMLParagraphElement>(null!)
  const ctaRef = useRef<HTMLDivElement>(null!)

  const [glitchText, setGlitchText] = useState("THE VANGUARD PROTOCOL")
  const [isRevealed, setIsRevealed] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    // Animate the spans that are already in the DOM (rendered by React)
    const chars = container.current.querySelectorAll('.char')

    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.03,
      ease: "none",
      onComplete: () => setIsRevealed(true)
    })
    .from(subtitleRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.8,
        borderLeft: "0px solid #B6FF3B"
    }, "-=0.2")
    .from(ctaRef.current, {
        y: 10,
        opacity: 0,
        duration: 0.5,
    }, "-=0.5")

  }, { scope: container })

  useEffect(() => {
    if (!isRevealed) return

    const interval = setInterval(() => {
        const original = "THE VANGUARD PROTOCOL"
        const chars = "ABCDEFGHIJKLMN0123456789$#!?/"
        let iterations = 0

        const glitchInterval = setInterval(() => {
            setGlitchText(() =>
                original.split("").map((char, index) => {
                    if(index < iterations) return original[index]
                    return chars[Math.floor(Math.random() * chars.length)]
                }).join("")
            )

            if(iterations >= original.length) {
                clearInterval(glitchInterval)
            }
            iterations += 1/3
        }, 30)
    }, 5000)

    return () => clearInterval(interval)
  }, [isRevealed])

  return (
    <section
        ref={container}
        className="relative h-screen flex flex-col items-start justify-center px-6 md:px-24 overflow-hidden bg-deep-black"
    >
      {/* Background Topology with Tactical Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NetworkTopology />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10" />
        <div className="absolute inset-0 bg-deep-black/60 z-10" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10"
                style={{backgroundImage: 'radial-gradient(#B6FF3B 0.5px, transparent 0.5px)', backgroundSize: '20px 20px'}} />
      </div>

      <div className="relative z-20 max-w-6xl w-full text-left">
        <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-neon-lime" />
            <span className="text-neon-lime font-mono text-sm tracking-[0.3em] uppercase animate-pulse">System Online // Status: Active</span>
        </div>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white flex flex-wrap"
        >
          {glitchText.split("").map((char, i) => (
            <span
                key={i}
                className={`char inline-block ${!isRevealed ? 'opacity-0 translate-y-4' : ''}`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <div className="border-l-2 border-neon-lime pl-8 mb-12">
            <p
            ref={subtitleRef}
            className="text-base md:text-xl text-gray-400 max-w-2xl leading-relaxed uppercase tracking-wide font-mono"
            >
            Elite counter-insurgency and digital fortification.
            We do not mitigate risk. We eliminate the threat.
            <br />
            <span className="text-gray-600 text-sm mt-2 block">[REDACTED INFORMATION CLASSIFIED]</span>
            </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <Button size="lg" className="bg-neon-lime text-white hover:bg-white hover:text-black px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold uppercase tracking-widest border-none transition-all">
            Deploy Now
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold uppercase tracking-widest transition-all">
            Intel Briefing
          </Button>
        </div>
      </div>

      {/* Tactical Corner Accents */}
      <div className="absolute top-12 right-12 text-neon-lime/30 font-mono text-xs text-right hidden md:block">
        COORD: 34.0522° N, 118.2437° W<br />
        SIGNAL: ENCRYPTED_AES_256<br />
        OPERATOR: VANGUARD_01
      </div>

      <div className="absolute bottom-12 left-12 w-64 h-1 bg-white/5 overflow-hidden hidden md:block">
        <div className="w-1/3 h-full bg-neon-lime animate-[scan_3s_infinite_linear]" />
      </div>
    </section>
  )
}
