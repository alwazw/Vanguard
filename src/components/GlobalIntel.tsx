'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function TacticalGlobe() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const pointsRef = useRef<THREE.Points>(null!)

  // Create a grid of points representing global hotspots
  const pointsCount = 400
  const positions = useMemo(() => {
    const pos = new Float32Array(pointsCount * 3)
    for (let i = 0; i < pointsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointsCount)
      const theta = Math.sqrt(pointsCount * Math.PI) * phi
      const r = 2.2
      pos[i * 3] = r * Math.cos(theta) * Math.sin(phi)
      pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.y = time * 0.1
    pointsRef.current.rotation.y = time * 0.1
  })

  return (
    <group>
      {/* Wireframe Globe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#B6FF3B"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Pulsing Hotspots */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#B6FF3B"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Atmospheric Glow */}
      <Sphere args={[2.1, 32, 32]}>
        <MeshDistortMaterial
          color="#B6FF3B"
          transparent
          opacity={0.05}
          speed={2}
          distort={0.2}
          radius={1}
        />
      </Sphere>
    </group>
  )
}

export default function GlobalIntel() {
  const container = useRef<HTMLDivElement>(null!)
  const feedRef = useRef<HTMLDivElement>(null!)

  const feedItems = [
    { code: "ORBIT_01", status: "STABLE", location: "GEO_STATIONARY" },
    { code: "SIG_INT_4", status: "ENCRYPTED", location: "NORTH_ATLANTIC" },
    { code: "KIN_DET_8", status: "CRITICAL", location: "SOUTH_CHINA_SEA" },
    { code: "NET_INFRA", status: "BREACH_DET", location: "CENTRAL_EUROPE" },
    { code: "SAT_LINK_X", status: "OFFLINE", location: "PACIFIC_NW" },
  ]

  useGSAP(() => {
    gsap.from(container.current.querySelectorAll('.intel-ui'), {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    })

    // Scrolling feed animation
    gsap.to(feedRef.current, {
        y: -100,
        duration: 10,
        repeat: -1,
        ease: "none"
    })
  }, { scope: container })

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-deep-black flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-24 overflow-hidden"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{backgroundImage: 'radial-gradient(#B6FF3B 0.5px, transparent 0.5px)', backgroundSize: '30px 30px'}} />

      {/* Content Side */}
      <div className="relative z-10 w-full md:w-1/2 text-left mb-12 md:mb-0">
        <div className="flex items-center gap-4 mb-6 intel-ui">
            <span className="w-8 h-[1px] bg-neon-lime" />
            <span className="text-neon-lime font-mono text-xs tracking-[0.4em] uppercase">Global Surveillance // Level: Orbital</span>
        </div>

        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white intel-ui">
          INTELLIGENCE<br />
          <span className="text-neon-lime opacity-80">SYNTHESIS</span>
        </h2>

        <p className="text-lg text-gray-400 font-mono uppercase tracking-wide max-w-xl mb-12 intel-ui leading-relaxed">
          Aggregating global kinetic and digital telemetry.
          The Vanguard Protocol utilizes predictive signal intelligence to neutralize threats before they manifest in the physical domain.
        </p>

        <div className="grid grid-cols-2 gap-8 intel-ui">
            <div>
                <div className="text-neon-lime font-bold text-3xl mb-1 font-mono">142+</div>
                <div className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em]">Active Satellites</div>
            </div>
            <div>
                <div className="text-white font-bold text-3xl mb-1 font-mono">0.02s</div>
                <div className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em]">Signal Latency</div>
            </div>
        </div>
      </div>

      {/* Visual Side (Globe) */}
      <div className="relative w-full md:w-1/2 h-[500px] md:h-[700px] intel-ui">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#B6FF3B" />
          <TacticalGlobe />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>

        {/* Tactical UI Overlays on Globe */}
        <div className="absolute top-0 right-0 p-8 border-r border-t border-neon-lime/30 hidden lg:block">
            <div className="text-neon-lime font-mono text-[10px] tracking-widest uppercase mb-4">Live_Feed_01 // SECURE</div>
            <div className="h-32 overflow-hidden relative">
                <div ref={feedRef} className="space-y-4">
                    {[...feedItems, ...feedItems].map((item, i) => (
                        <div key={i} className="flex items-center justify-between gap-8 border-b border-white/5 pb-2">
                            <span className="text-white text-[9px] font-mono">{item.code}</span>
                            <span className={`text-[9px] font-mono ${item.status === 'CRITICAL' ? 'text-neon-lime animate-pulse' : 'text-gray-500'}`}>
                                [{item.status}]
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 p-8 border-l border-b border-neon-lime/30 hidden lg:block">
            <div className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-2">COORD_LOCK: 34.0522° N, 118.2437° W</div>
            <div className="w-48 h-1 bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-lime/40 w-1/3 animate-[scan_2s_infinite_linear]" />
            </div>
        </div>
      </div>
    </section>
  )
}
