import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF, useCursor } from "@react-three/drei";


function ModelLoader (props) {
    const v = new THREE.Vector3()
    const ref = useRef()
    const modelString = '/' + props.modelName + '.glb'
    const {nodes, materials} = useGLTF(modelString)
    // const meshExtension = props.meshExtension.toString()
    // const meshName = nodes.meshExtension
    
    const shinyMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#000000').convertSRGBToLinear(),
        roughness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0,
    })

    const [active, set] = useState(false)
    const [zoom, setActive] = useState(false)

    useCursor(active)
    useFrame((state, delta) => {
        state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 55 : 42, 0.05)
        if (zoom) {
            state.camera.position.lerp(v.set(0, 40, 150), 0.01)
            state.camera.lookAt(0, 0, 0)
        }
        // state.camera.position.lerp(v.set(zoom ? 0 : 0, zoom ? 40 : 35, zoom ? 150 : 125), 0.01)
        
        state.camera.updateProjectionMatrix()
        ref.current.rotation.z = ref.current.rotation.z += delta * 1.5
      })

    return (
        <mesh
            onClick={() => setActive(!zoom)} 
            onPointerOver={() => set(true)} 
            onPointerOut={() => set(false)}
            receiveShadow
            castShadow
            ref={ref} 
            scale={5} 
            geometry={nodes.BaseMesh_Man_Simple.geometry} 
            rotation={[Math.PI / 2, 0, 0]} 
            {...props}
            material={shinyMaterial}
            
        >
            {/* <meshStandardMaterial color={0x000000}/> */}
            {/* <meshStandardMaterial color={0xFFFFFF}/> */}
        </mesh>
    )
}

export default ModelLoader