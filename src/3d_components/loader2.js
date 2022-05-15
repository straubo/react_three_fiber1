import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF, useCursor } from "@react-three/drei";


function ModelLoader2 (props) {
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
    const startLook = new THREE.Vector3(0, 0, 0)
    const endLook = new THREE.Vector3(0, 50, 0)
    let currentLook = new THREE.Vector3(0, 0, 0)
    // let targetQuaternion = new THREE.Quaternion(1, 0, 0, (Math.PI/2))

    // function onStart(state) {
    //     console.log('starting!')
    //     state.camera.lookAt(currentLook.x, currentLook.y, currentLook.z)
    // }

    useCursor(active)
    useFrame((state, delta) => {
        // second param: zoom ? 55 : 42
        // state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 42, 0.05)
        // if (zoom) {
        //     // state.camera.position.lerp(v.set(0, 40, 50), 0.01)
        //     state.camera.lookAt(250, 2000, 0)
        // }
        
        // state.camera.position.lerp(v.set(0, zoom ? 40 : 35, zoom ? 50 : 75), 0.01)

        // state.camera.quaternion.slerp(targetQuaternion, 0.3)   
        // quaternion.slerp(targetQuaternion, t)
        
        ref.current.rotation.z = ref.current.rotation.z += delta * 1.5
        state.camera.updateProjectionMatrix()
    })

    return (
        <mesh
            onClick={() => {
                setActive(!zoom)
                props.updatedCameraDirection('t-pose')
            }}
            onPointerOver={() => set(true)} 
            onPointerOut={() => set(false)}
            receiveShadow
            castShadow
            ref={ref} 
            scale={5} 
            geometry={nodes.BaseMesh_Man_Simple.geometry} 
            rotation={[Math.PI / 2, 0, 0]} 
            {...props}
            // material={shinyMaterial}
            
        >
            <meshStandardMaterial color={0x000000}/>
            {/* <meshStandardMaterial color={0xFFFFFF}/> */}
        </mesh>
    )
}

export default ModelLoader2