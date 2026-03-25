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
      duration: 30,
      ease: 'none',
      repeat: -1,
    })
  }, { scope: tickerRef })

  return (
    <div className="w-full bg-vanguard-red py-2 overflow-hidden border-y border-black/20 flex items-center z-50 relative">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap gap-12 text-white font-black uppercase text-xs tracking-widest px-6"
      >
        {[...threats, ...threats].map((threat, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="opacity-50">[ ALERT ]</span>
            <span>{threat.label}:</span>
            <span className="bg-deep-black text-vanguard-red px-2 py-0.5">{threat.value}</span>
            <span className="opacity-30">//</span>
          </div>
        ))}
      </div>
    </div>
  )
}
