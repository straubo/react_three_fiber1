import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF, useCursor } from "@react-three/drei";


function ModelLoader (props) {    
    const { nodes, materials } = useGLTF('/headset.glb')
    const ref = useRef()
    const [active, setActive] = useState(false)
    // useCursor(active)
    const shinyMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#000000').convertSRGBToLinear(),
        roughness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0,
    })

    useFrame((state, delta) => {
        // ref.current.rotation.z = ref.current.rotation.z += delta
        // ref.current.rotation.y = ref.current.rotation.y += delta * 1.5
    })

    return (
        <mesh
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