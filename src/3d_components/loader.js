import React, { useRef, useState } from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";


function ModelLoader (props) {    
    const { nodes, materials } = useGLTF('/headset.glb')
    const ref = useRef()
    // console.log(ref)

    useFrame((state, delta) => {
        ref.current.rotation.z = ref.current.rotation.z += delta
        // ref.current.rotation.y = ref.current.rotation.y += delta * 1.5
    })

    return (
        <mesh
            ref={ref} 
            scale={5} 
            geometry={nodes.VR_simple.geometry} 
            rotation={[Math.PI / 2, 0, 0]} 
            {...props}
        >
            <meshStandardMaterial color={0x000000}/>
        </mesh>
    )
}

export default ModelLoader