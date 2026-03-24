'use client'

import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'

function PointsLayer() {
  const ref = useRef<THREE.Points>(null!)
  const nodeCount = 300

  const positions = useMemo(() => {
    const pos = new Float32Array(nodeCount * 3)
    for (let i = 0; i < nodeCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15

    // Pulsing effect
    const time = state.clock.getElapsedTime()
    const scale = 1 + Math.sin(time) * 0.1
    ref.current.scale.set(scale, scale, scale)
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#B6FF3B"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  )
}

function LinesLayer() {
  const lineCount = 100
  const lines = useMemo(() => {
    const l = []
    for (let i = 0; i < lineCount; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      l.push({ start, end })
    }
    return l
  }, [])

  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    groupRef.current.rotation.x += delta / 12
    groupRef.current.rotation.y += delta / 18
  })

  return (
    <group ref={groupRef}>
      {lines.map((line, idx) => (
        <Line
          key={idx}
          points={[line.start, line.end]}
          color="#B6FF3B"
          lineWidth={0.5}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  )
}

export default function NetworkTopology() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <PointsLayer />
        <LinesLayer />
      </Canvas>
    </div>
  )
}
