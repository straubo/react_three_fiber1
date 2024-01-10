import * as THREE from 'three'
import { useState, useMemo } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'

// Base
// import { LayerMaterial, Depth, Fresnel, Noise, Color } from 'lamina/vanilla'

// blue-black - works
// const colorA = new THREE.Color('#2053a5').convertSRGBToLinear()
// const colorB = new THREE.Color('#0F1C4D').convertSRGBToLinear()
// const fresnel = new THREE.Color('#469cab').convertSRGBToLinear()

// greener
// const colorA = new THREE.Color('#184521').convertSRGBToLinear()
// const colorB = new THREE.Color('#0F1C4D').convertSRGBToLinear()
// const fresnel = new THREE.Color('#469cab').convertSRGBToLinear()

// lighter, to go with pink
// const colorC = new THREE.Color('#D8B29A').convertSRGBToLinear()
// const colorD = new THREE.Color('#DBA3AF').convertSRGBToLinear()
// const fresnel2 = new THREE.Color('#991515').convertSRGBToLinear()

// const material = new LayerMaterial({
//   layers: [
//     new Color({ color: colorA }),
//     new Depth({ colorA: colorA, colorB: colorB, alpha: 0.3, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
//     // new Depth({ colorA: colorA, colorB: colorB, alpha: 0.5, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
//     new Fresnel({ mode: 'add', color: fresnel, intensity: 1, power: 2.5, bias: 0 }),
//     new Noise({ mapping: 'local', type: 'simplex', scale: 10000, colorA: '#ffaf40', colorB: colorB, mode: 'multiply' })
//   ], 
//   lighting: 'physical'
// })

// const material2 = new LayerMaterial({
//   // color: 'red',
//   layers: [
//     new Color({ color: colorA }),
//     // new Depth({ colorA: colorC, colorB: colorD, alpha: 0.3, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
//     new Depth({ colorA: colorA, colorB: colorB, alpha: 0.5, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
//     new Fresnel({ mode: 'add', color: fresnel2, intensity: 1, power: 2.5, bias: 0 }),
//     new Noise({ mapping: 'local', type: 'simplex', scale: 10000, colorA: colorC, colorB: colorD, mode: 'multiply' })
//   ], 
//   lighting: 'physical'
// })

const shinyMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#bb86a1').convertSRGBToLinear(),
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0,
})

function Noodle(props) {
  const { viewport, camera } = useThree()
  const { nodes } = useGLTF('/worms-transformed.glb')
  const [geometry] = useState(() => nodes[`noodle_${Math.ceil(Math.random() * 4)}`].geometry)
  const [speed] = useState(() => Math.random())

  const position = useMemo(() => {
    const z = Math.random() * -37
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
    return [THREE.MathUtils.randFloatSpread(bounds.width * 1.5), THREE.MathUtils.randFloatSpread(bounds.height), z - 10]
  }, [viewport])
  
  return (
    <Float position={position} speed={speed} rotationIntensity={3} floatIntensity={60} dispose={null}>
      <mesh scale={30} geometry={geometry} material={
        // props.activeItem === "about" ?  material2 : material
        shinyMaterial
      } />
      {/* <mesh scale={5} material={
        props.activeItem === "about" ?  material2 : material
      } >
        <boxGeometry />
      </mesh> */}
    </Float>
  )
}

export default function Noodles(props) {
  return Array.from({ length: 60 }, (_, i) => 
  <Noodle key={i} 
  activeItem={props.activeItem}
  />)
}

// useGLTF.preload('/worm-transformed.glb')
