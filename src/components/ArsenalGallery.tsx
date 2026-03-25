'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float, Box, TorusKnot, RoundedBox } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger)

const arsenalItems = [
  {
    id: 1,
    name: 'Flipper Zero',
    description: 'Clones 125kHz badges, emulates IR signals, and enables Bluetooth spamming for physical access testing.',
    color: '#B6FF3B',
    type: 'flipper'
  },
  {
    id: 2,
    name: 'O.MG Cable',
    description: 'Remote keystroke injection and data exfiltration on plug-in. A Trojan Horse disguised as a standard USB cable.',
    color: '#3B7BFF',
    type: 'cable'
  },
  {
    id: 3,
    name: 'WiFi Pineapple Mark VII',
    description: 'Industry-standard rogue access point for man-in-the-middle attacks and network penetration testing.',
    color: '#FF3B7B',
    type: 'pineapple'
  },
  {
    id: 4,
    name: 'iCopy-XS',
    description: 'Decodes and replicates high-security badges for authorized physical penetration assessments.',
    color: '#B6FF3B',
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
              <meshStandardMaterial color="#3B7BFF" emissive="#3B7BFF" emissiveIntensity={2} />
            </mesh>
            <mesh position={[0.7, -0.2, 0.26]}>
              <circleGeometry args={[0.1, 32]} />
              <meshStandardMaterial color="#B6FF3B" />
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
                <meshStandardMaterial color="#3B7BFF" />
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
  const horizontalRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    const calculateWidth = () => horizontalRef.current.scrollWidth - window.innerWidth
    let totalWidth = calculateWidth()

    const animation = gsap.to(horizontalRef.current, {
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

    const handleResize = () => {
        totalWidth = calculateWidth()
        ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="h-screen overflow-hidden bg-black py-20 px-6">
      <div className="absolute top-20 left-10 z-10">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">The Modern Arsenal</h2>
        <div className="h-1 w-24 bg-neon-lime"></div>
      </div>

      <div ref={horizontalRef} className="flex h-full items-center pl-[10vw]">
        {arsenalItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[80vw] md:w-[45vw] h-[70vh] mr-20 border border-white/10 bg-white/5 backdrop-blur-md p-10 flex flex-col items-center justify-between group overflow-hidden"
          >
            <div className="w-full h-1/2 flex items-center justify-center relative">
                <DeviceModel color={item.color} type={item.type} />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-widest text-white">{item.name}</h3>
              <p className="text-gray-400 max-w-sm mx-auto leading-relaxed">{item.description}</p>
            </div>

            <button className="mt-8 px-6 py-3 border border-neon-lime text-neon-lime hover:bg-neon-lime hover:text-black transition-all uppercase font-bold tracking-widest text-sm">
              Deploy Info
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
