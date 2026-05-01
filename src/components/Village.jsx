function House({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 1.1, 1.2]} />
        <meshStandardMaterial color="#f5f0e6" roughness={0.4} />
      </mesh>
      <mesh position={[0, 1.15, 0]} rotation={[0, Math.PI/4, 0]} castShadow>
        <coneGeometry args={[0.8, 0.6, 4]} />
        <meshStandardMaterial color="#4a3b2c" roughness={0.7} />
      </mesh>
    </group>
  )
}

function Tree({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.2, 1.2]} />
        <meshStandardMaterial color="#6b4c3b" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.5, 8]} />
        <meshStandardMaterial color="#2d5a27" roughness={0.4} />
      </mesh>
    </group>
  )
}

export default function Village() {
  const houses = [
    [-3, -2], [0, -2.5], [3.5, -2], [-2.5, 1.8], [0.5, 2.2], [3, 1.5], [-4, 0.5]
  ]
  const trees = [
    [-5, -3], [5, -3], [-6, 0], [6, 1], [0, 4], [-4, 3]
  ]

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <circleGeometry args={[12, 64]} />
        <meshStandardMaterial color="#e0e6d0" roughness={0.9} />
      </mesh>
      {houses.map((pos, i) => <House key={i} position={pos} />)}
      {trees.map((pos, i) => <Tree key={i} position={pos} />)}
    </>
  )
}
