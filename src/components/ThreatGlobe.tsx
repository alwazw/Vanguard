'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Line } from '@react-three/drei'
import * as THREE from 'three'

// Convert lat/lng to 3D coordinates on sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)
  return new THREE.Vector3(x, y, z)
}

// Generate arc points between two locations
function generateArcPoints(start: THREE.Vector3, end: THREE.Vector3, segments: number = 50): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
  const distance = start.distanceTo(end)
  midPoint.normalize().multiplyScalar(2 + distance * 0.3)
  
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const point = new THREE.Vector3()
    // Quadratic bezier curve
    point.x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * midPoint.x + t * t * end.x
    point.y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * midPoint.y + t * t * end.y
    point.z = (1 - t) * (1 - t) * start.z + 2 * (1 - t) * t * midPoint.z + t * t * end.z
    points.push(point)
  }
  return points
}

// Attack locations data
const locations = [
  { name: 'Moscow', lat: 55.7558, lng: 37.6173 },
  { name: 'Beijing', lat: 39.9042, lng: 116.4074 },
  { name: 'New York', lat: 40.7128, lng: -74.0060 },
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
  { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Berlin', lat: 52.5200, lng: 13.4050 },
  { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
  { name: 'Lagos', lat: 6.5244, lng: 3.3792 },
]

interface AttackArc {
  id: number
  from: THREE.Vector3
  to: THREE.Vector3
  points: THREE.Vector3[]
  progress: number
  speed: number
  color: string
}

// Animated attack arc component
function AttackArcLine({ arc }: { arc: AttackArc }) {
  const lineRef = useRef<THREE.Line>(null)
  const [visiblePoints, setVisiblePoints] = useState<THREE.Vector3[]>([])
  
  useFrame((_, delta) => {
    arc.progress += delta * arc.speed
    if (arc.progress > 1) arc.progress = 0
    
    const endIndex = Math.floor(arc.progress * arc.points.length)
    const startIndex = Math.max(0, endIndex - 15)
    setVisiblePoints(arc.points.slice(startIndex, endIndex))
  })
  
  if (visiblePoints.length < 2) return null
  
  return (
    <Line
      ref={lineRef}
      points={visiblePoints}
      color={arc.color}
      lineWidth={2}
      transparent
      opacity={0.8}
    />
  )
}

// Location marker dot
function LocationDot({ position }: { position: THREE.Vector3 }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.2)
    }
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#FF6B35" />
    </mesh>
  )
}

// Globe with grid lines
function Globe() {
  const globeRef = useRef<THREE.Mesh>(null)
  
  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.05
    }
  })
  
  // Generate latitude/longitude grid lines
  const gridLines = useMemo(() => {
    const lines: THREE.Vector3[][] = []
    const radius = 1.51
    
    // Latitude lines
    for (let lat = -60; lat <= 60; lat += 30) {
      const points: THREE.Vector3[] = []
      for (let lng = -180; lng <= 180; lng += 5) {
        points.push(latLngToVector3(lat, lng, radius))
      }
      lines.push(points)
    }
    
    // Longitude lines
    for (let lng = -180; lng < 180; lng += 30) {
      const points: THREE.Vector3[] = []
      for (let lat = -90; lat <= 90; lat += 5) {
        points.push(latLngToVector3(lat, lng, radius))
      }
      lines.push(points)
    }
    
    return lines
  }, [])
  
  return (
    <group ref={globeRef}>
      {/* Main sphere */}
      <Sphere args={[1.5, 64, 64]}>
        <meshBasicMaterial color="#0a0e14" transparent opacity={0.9} />
      </Sphere>
      
      {/* Grid lines */}
      {gridLines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#FF6B35"
          lineWidth={0.5}
          transparent
          opacity={0.15}
        />
      ))}
      
      {/* Location dots */}
      {locations.map((loc, i) => (
        <LocationDot key={i} position={latLngToVector3(loc.lat, loc.lng, 1.52)} />
      ))}
    </group>
  )
}

// Attack arcs manager
function AttackArcs() {
  const [arcs, setArcs] = useState<AttackArc[]>([])
  
  useEffect(() => {
    const colors = ['#FF6B35', '#FF9500', '#FFB800']
    
    // Generate initial arcs
    const initialArcs: AttackArc[] = []
    for (let i = 0; i < 8; i++) {
      const fromIdx = Math.floor(Math.random() * locations.length)
      let toIdx = Math.floor(Math.random() * locations.length)
      while (toIdx === fromIdx) toIdx = Math.floor(Math.random() * locations.length)
      
      const from = latLngToVector3(locations[fromIdx].lat, locations[fromIdx].lng, 1.52)
      const to = latLngToVector3(locations[toIdx].lat, locations[toIdx].lng, 1.52)
      
      initialArcs.push({
        id: i,
        from,
        to,
        points: generateArcPoints(from, to),
        progress: Math.random(),
        speed: 0.3 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    setArcs(initialArcs)
    
    // Add new arcs periodically
    const interval = setInterval(() => {
      setArcs(prev => {
        const fromIdx = Math.floor(Math.random() * locations.length)
        let toIdx = Math.floor(Math.random() * locations.length)
        while (toIdx === fromIdx) toIdx = Math.floor(Math.random() * locations.length)
        
        const from = latLngToVector3(locations[fromIdx].lat, locations[fromIdx].lng, 1.52)
        const to = latLngToVector3(locations[toIdx].lat, locations[toIdx].lng, 1.52)
        
        const newArc: AttackArc = {
          id: Date.now(),
          from,
          to,
          points: generateArcPoints(from, to),
          progress: 0,
          speed: 0.3 + Math.random() * 0.4,
          color: colors[Math.floor(Math.random() * colors.length)]
        }
        
        // Keep only last 12 arcs
        const updated = [...prev, newArc]
        if (updated.length > 12) updated.shift()
        return updated
      })
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <>
      {arcs.map(arc => (
        <AttackArcLine key={arc.id} arc={arc} />
      ))}
    </>
  )
}

// Stats ticker
function StatsTicker() {
  const [stats, setStats] = useState({
    attacks: 147892,
    blocked: 146234,
    countries: 94
  })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        attacks: prev.attacks + Math.floor(Math.random() * 50),
        blocked: prev.blocked + Math.floor(Math.random() * 48),
        countries: 94 + Math.floor(Math.random() * 3)
      }))
    }, 1500)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto flex flex-wrap gap-4 md:gap-6 z-10">
      <div className="bg-noir-dark/80 backdrop-blur-sm border border-vanguard-orange/20 px-3 py-2">
        <div className="text-[10px] text-slate-500 uppercase tracking-wider">Live Threats</div>
        <div className="text-lg md:text-xl font-mono text-vanguard-orange">{stats.attacks.toLocaleString()}</div>
      </div>
      <div className="bg-noir-dark/80 backdrop-blur-sm border border-vanguard-orange/20 px-3 py-2">
        <div className="text-[10px] text-slate-500 uppercase tracking-wider">Mitigated</div>
        <div className="text-lg md:text-xl font-mono text-green-500">{stats.blocked.toLocaleString()}</div>
      </div>
      <div className="bg-noir-dark/80 backdrop-blur-sm border border-vanguard-orange/20 px-3 py-2">
        <div className="text-[10px] text-slate-500 uppercase tracking-wider">Source Nations</div>
        <div className="text-lg md:text-xl font-mono text-vanguard-amber">{stats.countries}</div>
      </div>
    </div>
  )
}

export default function ThreatGlobe() {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  return (
    <section className="relative py-10 md:py-16 px-4 md:px-6 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-vanguard-orange"></div>
            <span className="text-vanguard-orange text-xs font-mono uppercase tracking-widest">Global Threat Intelligence</span>
            <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-vanguard-orange"></div>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
            Real-Time <span className="text-vanguard-orange">Attack Vectors</span>
          </h2>
        </div>
        
        {/* Globe Container */}
        <div className="relative h-[350px] md:h-[500px] w-full">
          {isMounted && (
            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Globe />
              <AttackArcs />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.3}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI - Math.PI / 4}
              />
            </Canvas>
          )}
          
          {/* Stats overlay */}
          <StatsTicker />
          
          {/* Scan line effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-vanguard-orange/5 via-transparent to-vanguard-orange/5 animate-pulse"></div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-center text-slate-500 text-xs md:text-sm mt-4 max-w-2xl mx-auto">
          Live visualization of global cyber threat activity. Our multi-domain approach identifies 
          and mitigates threats across physical and digital attack surfaces.
        </p>
      </div>
    </section>
  )
}
