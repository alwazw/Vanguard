'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const inner = innerRef.current
    const svg = svgRef.current
    if (!cursor || !inner || !svg) return

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      })
      gsap.to(inner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power3.out',
      })
    }

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.3 })
    }

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 })
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    const onMouseEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button, a, .hover-target')
      if (target) {
        gsap.to(cursor, { scale: 1.5, backgroundColor: 'rgba(0, 212, 255, 0.2)', borderColor: '#00D4FF', duration: 0.3 })
        gsap.to(inner, { scale: 2, backgroundColor: '#00D4FF', duration: 0.3 })
        gsap.to(svg, { opacity: 1, duration: 0.3 })
      }
    }

    const onMouseLeave = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button, a, .hover-target')
      if (target) {
        gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.5)', duration: 0.3 })
        gsap.to(inner, { scale: 1, backgroundColor: '#00D4FF', duration: 0.3 })
        gsap.to(svg, { opacity: 0, duration: 0.3 })
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mouseover', onMouseEnter)
    window.addEventListener('mouseout', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mouseover', onMouseEnter)
      window.removeEventListener('mouseout', onMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <svg
          ref={svgRef}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-0"
        >
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
      </div>
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-2 h-2 bg-neon-lime rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}
