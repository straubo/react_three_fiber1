import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useGLTF, useCursor, MeshDistortMaterial } from "@react-three/drei";


function ModelLoader5 (props) {   
    const v = new THREE.Vector3()
    const ref = useRef()
    const {nodes, materials} = useGLTF('/headset.glb')
    const [active, setActive] = useState(false)
    const [zoom, set] = useState(false)

    const shinyMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#000000').convertSRGBToLinear(),
        roughness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0,
    })

    useCursor(active)

    return (
        <mesh
            ref={ref} 
            {...props}
            onClick={() => {
                set(!zoom)
                props.selectObj(props.section)
            }} 
            onPointerOver={() => setActive(true)} 
            onPointerOut={() => setActive(false)}
            receiveShadow
            castShadow
        >
            <sphereBufferGeometry args={[1, 64, 64]} >
            </sphereBufferGeometry>
             <MeshDistortMaterial 
                    color={props.color}
                    distort={0.4}
                    speed={3}
                    metalness={0.1}
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0}
                />
        </mesh>
    )
}

export default ModelLoader5