'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, TorusKnot, Box, Sphere, MeshDistortMaterial } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger)

const arsenalItems = [
  {
    id: 1,
    name: 'FLIPPER_0',
    description: 'Multi-functional kinetic interaction tool for RF, RFID, and sub-GHz exploration.',
    code: 'UNIT-ALPHA-01',
    type: 'flipper'
  },
  {
    id: 2,
    name: 'OMG_CABLE',
    description: 'Advanced covert keystroke injection via high-fidelity USB cable emulation.',
    code: 'UNIT-SIG-04',
    type: 'cable'
  },
  {
    id: 3,
    name: 'PINEAPPLE_W',
    description: 'The industry-standard for rogue access point and man-in-the-middle operations.',
    code: 'UNIT-WIFI-09',
    type: 'pineapple'
  },
  {
    id: 4,
    name: 'DEPLOY_KIT',
    description: 'Full-spectrum field operations deployment suite. Professional grade hardware.',
    code: 'UNIT-ALL-X',
    type: 'suite'
  },
]

function DeviceModel({ type }: { type: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#E31C25" />
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
        {type === 'flipper' && (
          <group>
            <mesh>
              <boxGeometry args={[2.5, 1.2, 0.6]} />
              <meshStandardMaterial color="#333" roughness={0.1} metalness={0.8} />
            </mesh>
            <mesh position={[0, 0, 0.31]}>
              <planeGeometry args={[1.5, 0.8]} />
              <meshStandardMaterial color="#E31C25" emissive="#E31C25" emissiveIntensity={0.5} wireframe />
            </mesh>
          </group>
        )}
        {type === 'cable' && (
           <TorusKnot args={[1, 0.05, 128, 16]} scale={1.2}>
             <meshStandardMaterial color="#E31C25" wireframe />
           </TorusKnot>
        )}
        {type === 'pineapple' && (
          <Box args={[1.5, 1.5, 1.5]}>
             <MeshDistortMaterial
                color="#E31C25"
                speed={4}
                distort={0.4}
                radius={1}
                wireframe
            />
          </Box>
        )}
        {type === 'suite' && (
          <Sphere args={[1.4, 64, 64]}>
            <MeshDistortMaterial
                color="#E31C25"
                speed={2}
                distort={0.25}
                radius={1.4}
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
  const horizontalRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    const calculateWidth = () => horizontalRef.current.scrollWidth - window.innerWidth

    gsap.to(horizontalRef.current, {
      x: () => -calculateWidth(),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${calculateWidth()}`,
        invalidateOnRefresh: true,
      },
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="h-screen overflow-hidden bg-deep-black py-20 border-t border-white/5">
      <div className="absolute top-24 left-16 z-10">
        <span className="text-tactical-red font-mono text-sm tracking-[0.4em] uppercase mb-4 block animate-pulse">Asset Repository</span>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">THE ARMOURY</h2>
      </div>

      <div ref={horizontalRef} className="flex h-full items-center pl-[15vw]">
        {arsenalItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[85vw] md:w-[50vw] h-[75vh] mr-32 border-l border-white/5 bg-[#0a0a0a] p-16 flex flex-col items-start justify-between group relative overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                 style={{backgroundImage: 'linear-gradient(45deg, #E31C25 1px, transparent 1px)', backgroundSize: '40px 40px'}} />

            <div className="w-full h-1/2 flex items-center justify-center relative z-10">
                <DeviceModel type={item.type} />
                <div className="absolute bottom-0 right-0 text-[100px] font-black text-white/5 pointer-events-none select-none">
                    {String(item.id).padStart(2, '0')}
                </div>
            </div>

            <div className="relative z-10 w-full">
              <span className="text-tactical-red font-mono text-xs tracking-widest mb-4 block">{item.code}</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white group-hover:text-tactical-red transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-gray-500 max-w-sm leading-relaxed font-mono text-sm uppercase tracking-wide">
                {item.description}
              </p>
            </div>

            <button className="relative z-10 px-10 py-4 border border-white/20 text-white hover:bg-tactical-red hover:border-tactical-red transition-all uppercase font-bold tracking-widest text-xs flex items-center gap-4">
              <span>View Specs</span>
              <div className="w-4 h-[1px] bg-current" />
            </button>
          </div>
        ))}
      </div>

      {/* Grid Overlay for the whole section */}
      <div className="absolute inset-0 pointer-events-none border-x border-white/5 mx-16" />
    </section>
  )
}
