'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'

export default function Hero() {
  const container = useRef<HTMLDivElement>(null!)
  const titleRef = useRef<HTMLHeadingElement>(null!)
  const subtitleRef = useRef<HTMLParagraphElement>(null!)
  const ctaRef = useRef<HTMLDivElement>(null!)
  const badgeRef = useRef<HTMLDivElement>(null!)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    const spans = titleRef.current.querySelectorAll('.word-span')

    tl.from(badgeRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
    })
    .from(spans, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      skewY: 7,
      stagger: 0.1,
    }, '-=0.4')
    .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
    }, '-=1.2')
    .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
    }, '-=1')

    // Magnetic effect for buttons
    const buttons = ctaRef.current.querySelectorAll('button')
    buttons.forEach(btn => {
      btn.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.5,
          ease: 'power2.out'
        })
      })

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        })
      })
    })

  }, { scope: container })

  return (
    <section
        ref={container}
        className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-0 overflow-hidden"
    >
      {/* Video Background - Client Only */}
      {isMounted ? (
        <div className="absolute inset-0 z-0 bg-noir-dark">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover md:object-contain md:scale-110"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%282%29-oo6AlnzQUROPslUGA0j946qSDs9Elr.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-noir-dark/60"></div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-noir-dark"></div>
      )}

      {/* Corner brackets - Orange accent */}
      <div className="absolute top-6 md:top-8 left-6 md:left-8 w-8 md:w-12 h-8 md:h-12 border-l-2 border-t-2 border-vanguard-orange/60 z-10"></div>
      <div className="absolute top-6 md:top-8 right-6 md:right-8 w-8 md:w-12 h-8 md:h-12 border-r-2 border-t-2 border-vanguard-orange/60 z-10"></div>
      <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 w-8 md:w-12 h-8 md:h-12 border-l-2 border-b-2 border-vanguard-orange/60 z-10"></div>
      <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 w-8 md:w-12 h-8 md:h-12 border-r-2 border-b-2 border-vanguard-orange/60 z-10"></div>
      
      <div className="max-w-7xl w-full text-center z-10">
        <div ref={badgeRef} className="inline-block px-4 py-2 border border-vanguard-orange/40 bg-vanguard-orange/5 backdrop-blur-sm mb-6">
          <span className="text-vanguard-orange text-[10px] md:text-xs font-mono uppercase tracking-widest">// STATUS: ENCRYPTED // CLEARANCE: C-SUITE</span>
        </div>
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-none mb-6 flex flex-wrap justify-center gap-x-2 md:gap-x-4"
        >
          {"The Vanguard Protocol".split(" ").map((word, i) => (
            <span key={i} className={`word-span inline-block ${word === "Vanguard" ? "text-vanguard-orange text-glow" : ""}`}>
              {word}
            </span>
          ))}
        </h1>
        <p
          ref={subtitleRef}
          className="text-sm md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Multi-Domain Framework for Integrated Physical and Cyber Security Validation. 
          Converging advanced penetration testing, AI-driven red teaming, and elite training.
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button className="px-6 md:px-8 py-3 md:py-4 bg-vanguard-orange text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-vanguard-amber transition-colors glow-orange">
            Initiate Protocol
          </button>
          <button className="px-6 md:px-8 py-3 md:py-4 border border-slate-500 text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:border-vanguard-orange hover:text-vanguard-orange transition-all">
            View Services
          </button>
        </div>
      </div>
      
      {/* Subtle scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-vanguard-orange to-transparent animate-pulse"></div>
      </div>
    </section>
  )
}
