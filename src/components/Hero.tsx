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

    tl.from(titleRef.current, {
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
    }, '-=1')
    .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
    }, '-=0.8')
  }, { scope: container })

  return (
    <section
        ref={container}
        className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-7xl w-full text-center z-10">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-none mb-6"
        >
          The <span className="text-neon-lime">Vanguard</span> Protocol
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Converging physical and cyber security to architect a resilient tomorrow.
          Next-generation consulting for the modern adversary.
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-neon-lime text-black font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Initiate Protocol
          </button>
          <button className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            View Arsenal
          </button>
        </div>
      </div>
    </section>
  )
}
