import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF, useCursor } from "@react-three/drei";


function ModelLoader (props) {   
    const v = new THREE.Vector3()
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
    const [zoom, set] = useState(false)

    useCursor(active)
    // useFrame((state, delta) => {
    //     state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 55 : 42, 0.05)
    //     if (zoom) {
    //         state.camera.position.lerp(v.set(0, 40, 150), 0.01)
    //         state.camera.lookAt(0, 0, 0)
    //     }
    //     // state.camera.position.lerp(v.set(zoom ? 0 : 0, zoom ? 40 : 35, zoom ? 150 : 125), 0.01)
        
    //     state.camera.updateProjectionMatrix()
    //     ref.current.rotation.z = ref.current.rotation.z += delta * 1.5
    //   })

    return (
        <mesh
            ref={ref} 
            {...props}
            onClick={() => {
                set(!zoom)
                props.updatedCameraDirection('work')
            }} 
            onPointerOver={() => setActive(true)} 
            onPointerOut={() => setActive(false)}
            receiveShadow
            castShadow
            geometry={nodes.VR_simple.geometry} 
            rotation={[Math.PI / 2, 0, 0]} 
            material={shinyMaterial}
            
        >
            {/* <meshStandardMaterial color={0x000000}/> */}
            {/* <meshStandardMaterial color={0xFFFFFF}/> */}
        </mesh>
    )
}

export default ModelLoader