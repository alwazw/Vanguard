'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function Hero() {
  const container = useRef<HTMLDivElement>(null!)
  const titleRef = useRef<HTMLHeadingElement>(null!)
  const subtitleRef = useRef<HTMLParagraphElement>(null!)
  const ctaRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    const spans = titleRef.current.querySelectorAll('.word-span')

    tl.from(spans, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      skewY: 7,
      stagger: 0.1,
    })
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
      btn.addEventListener('mousemove', (e: any) => {
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
        className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-7xl w-full text-center z-10">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-none mb-6 flex flex-wrap justify-center gap-x-2 md:gap-x-4"
        >
          {"The Vanguard Protocol".split(" ").map((word, i) => (
            <span key={i} className={`word-span inline-block ${word === "Vanguard" ? "text-neon-lime" : ""}`}>
              {word}
            </span>
          ))}
        </h1>
        <p
          ref={subtitleRef}
          className="text-base md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Multi-domain penetration testing. AI-driven remediation deployment. Elite security training. The traditional perimeter is obsolete.
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button className="px-6 md:px-8 py-3 md:py-4 bg-neon-lime text-black font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white transition-colors cursor-none">
            Request Assessment
          </button>
          <button className="px-6 md:px-8 py-3 md:py-4 border border-white text-white font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white hover:text-black transition-all cursor-none">
            View Services
          </button>
        </div>
      </div>
    </section>
  )
}
