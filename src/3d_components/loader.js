import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF, useCursor } from "@react-three/drei";


function ModelLoader ({props, v = new THREE.Vector3()}) {   
    // ref and mesh/material stuff 
    const ref = useRef()
    const {nodes, materials} = useGLTF('/headset.glb')
    const shinyMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#000000').convertSRGBToLinear(),
        roughness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0,
    })

    const [active, setActive] = useState(false)
    const [zoom, set] = useState(true)

    useCursor(active)
    useFrame((state) => {
        state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 10 : 42, 0.05)
        state.camera.position.lerp(v.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), 0.05)
        state.camera.lookAt(0, 0, 0)
        state.camera.updateProjectionMatrix()
        // ref.current.rotation.y = ref.current.rotation.y += delta * 1.5
      })

    return (
        <mesh
        onClick={() => set(!zoom)} onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}
            receiveShadow
            castShadow
            ref={ref} 
            scale={5} 
            geometry={nodes.VR_simple.geometry} 
            rotation={[Math.PI / 2, 0, 0]} 
            {...props}
            material={shinyMaterial}
            
        >
            {/* <meshStandardMaterial color={0x000000}/> */}
        </mesh>
    )
}

export default ModelLoader