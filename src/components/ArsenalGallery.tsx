'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState, useCallback, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float, Box, TorusKnot, RoundedBox } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger)

const arsenalItems = [
  {
    id: 1,
    name: 'Flipper Zero',
    description: 'Clones 125kHz badges, emulates IR signals, and enables Bluetooth spamming for physical access testing.',
    color: '#00D4FF',
    type: 'flipper'
  },
  {
    id: 2,
    name: 'O.MG Cable',
    description: 'Remote keystroke injection and data exfiltration on plug-in. A Trojan Horse disguised as a standard USB cable.',
    color: '#0066CC',
    type: 'cable'
  },
  {
    id: 3,
    name: 'WiFi Pineapple Mark VII',
    description: 'Industry-standard rogue access point for man-in-the-middle attacks and network penetration testing.',
    color: '#FF4757',
    type: 'pineapple'
  },
  {
    id: 4,
    name: 'iCopy-XS',
    description: 'Decodes and replicates high-security badges for authorized physical penetration assessments.',
    color: '#00D9A5',
    type: 'suite'
  },
]

function DeviceModel({ color, type }: { color: string, type: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        {type === 'flipper' && (
          <group>
            <RoundedBox args={[2, 1, 0.5]} radius={0.1} smoothness={4}>
              <meshStandardMaterial color={color} wireframe />
            </RoundedBox>
            <mesh position={[0, 0, 0.26]}>
              <planeGeometry args={[1.2, 0.6]} />
              <meshStandardMaterial color="#0066CC" emissive="#0066CC" emissiveIntensity={2} />
            </mesh>
            <mesh position={[0.7, -0.2, 0.26]}>
              <circleGeometry args={[0.1, 32]} />
              <meshStandardMaterial color="#00D4FF" />
            </mesh>
          </group>
        )}
        {type === 'cable' && (
          <group>
            <TorusKnot args={[1, 0.1, 128, 16]}>
                <meshStandardMaterial color={color} wireframe />
            </TorusKnot>
            <mesh position={[1, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[0.3, 0.3, 0.5]} />
                <meshStandardMaterial color="#0066CC" />
            </mesh>
          </group>
        )}
        {type === 'pineapple' && (
          <Box args={[1, 1.5, 1]}>
             <MeshDistortMaterial
                color={color}
                speed={3}
                distort={0.4}
                radius={1}
                wireframe
            />
          </Box>
        )}
        {type === 'suite' && (
          <Sphere args={[1.2, 64, 64]}>
            <MeshDistortMaterial
                color={color}
                speed={3}
                distort={0.2}
                radius={1.2}
                wireframe
            />
          </Sphere>
        )}
      </Float>
    </Canvas>
  )
}

export default function ArsenalGallery() {
  const containerRef = useRef<HTMLDivElement>(null!)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % arsenalItems.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + arsenalItems.length) % arsenalItems.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
  }

  useGSAP(() => {
    gsap.from('.arsenal-header', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="min-h-screen bg-slate-950 py-16 md:py-20 px-4 md:px-6 overflow-hidden">
      <div className="arsenal-header max-w-7xl mx-auto mb-8 md:mb-12">
        <h2 className="text-3xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">The Modern Arsenal</h2>
        <div className="h-1 w-24 bg-neon-lime"></div>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Navigation Arrows - Desktop */}
        <button
          onClick={goToPrev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-14 h-14 items-center justify-center border border-white/20 bg-black/50 backdrop-blur-sm hover:border-neon-lime hover:bg-neon-lime/10 transition-all group"
          aria-label="Previous item"
        >
          <svg className="w-6 h-6 text-white group-hover:text-neon-lime transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-14 h-14 items-center justify-center border border-white/20 bg-black/50 backdrop-blur-sm hover:border-neon-lime hover:bg-neon-lime/10 transition-all group"
          aria-label="Next item"
        >
          <svg className="w-6 h-6 text-white group-hover:text-neon-lime transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Track */}
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {arsenalItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full px-2 md:px-8"
              >
                <div className="border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10 flex flex-col items-center group overflow-hidden">
                  {/* 3D Model Container */}
                  <div className="w-full h-[250px] md:h-[350px] flex items-center justify-center relative mb-6">
                    <DeviceModel color={item.color} type={item.type} />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center w-full max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 uppercase tracking-widest text-white">{item.name}</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">{item.description}</p>
                    <button className="px-6 py-3 border border-neon-lime text-neon-lime hover:bg-neon-lime hover:text-black transition-all uppercase font-bold tracking-widest text-xs md:text-sm">
                      Deploy Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={goToPrev}
            className="flex w-12 h-12 items-center justify-center border border-white/20 bg-black/50 backdrop-blur-sm hover:border-neon-lime transition-all"
            aria-label="Previous item"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="flex w-12 h-12 items-center justify-center border border-white/20 bg-black/50 backdrop-blur-sm hover:border-neon-lime transition-all"
            aria-label="Next item"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-6 md:mt-8">
          {arsenalItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-neon-lime scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-gray-500 text-sm font-mono">
          {String(currentIndex + 1).padStart(2, '0')} / {String(arsenalItems.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  )
}
