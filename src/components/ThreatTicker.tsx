'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const threats = [
  { label: 'AVG US BREACH', value: '$10M' },
  { label: 'MID-MARKET IMPACT', value: '$29M' },
  { label: 'SCATTERED SPIDER', value: '£300M' },
  { label: 'JLR RANSOMWARE', value: '£1.98B' },
  { label: 'MCDONALD\'S DATA', value: '64M RECS' },
  { label: 'GLOBAL AVG BREACH', value: '$5.3M' },
]

export default function ThreatTicker() {
  const tickerRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    const list = tickerRef.current
    const totalWidth = list.scrollWidth / 2

    gsap.to(list, {
      x: -totalWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
    })
  }, { scope: tickerRef })

  return (
    <div className="w-full bg-tactical-red py-1 overflow-hidden border-y border-white/10 flex items-center z-50 relative">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap gap-12 text-white font-bold uppercase text-[10px] tracking-[0.2em] px-6"
      >
        {[...threats, ...threats].map((threat, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="opacity-60 text-black font-black bg-white/10 px-1">[ THREAT LEVEL: CRITICAL ]</span>
            <span>{threat.label}:</span>
            <span className="text-black bg-white font-black px-1.5 py-0.5">{threat.value}</span>
            <span className="opacity-30">//</span>
          </div>
        ))}
      </div>
    </div>
  )
}
