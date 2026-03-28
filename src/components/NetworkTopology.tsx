'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function Topology() {
  const ref = useRef<THREE.Points>(null!)

  const [positions, colors] = useMemo(() => {
    const count = 2000
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)
    const color = new THREE.Color("#B6FF3B")

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15

      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
    }
    return [pos, cols]
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = time * 0.05
    ref.current.rotation.y = time * 0.075

    // Pulsing effect
    const s = 1 + Math.sin(time * 0.5) * 0.1
    ref.current.scale.set(s, s, s)
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* Lines connecting points - simple wireframe sphere for "topology" feel */}
      <mesh scale={[6, 6, 6]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial color="#B6FF3B" wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  )
}

export default function NetworkTopology() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Topology />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black opacity-80" />
    </div>
  )
}
