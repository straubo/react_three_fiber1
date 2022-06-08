import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF, useCursor } from "@react-three/drei";


function ModelLoader (props) {   
    const v = new THREE.Vector3()
    const ref = useRef()
    const modelString = '/' + props.modelName + '.glb'
    const {nodes, materials} = useGLTF(modelString)

    const [active, setActive] = useState(false)
    const [zoom, set] = useState(false)

    const shinyMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(
            props.activeItem == props.section ?
            props.selectedColor : props.color
            ).convertSRGBToLinear(),
        roughness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0,
    })

    useCursor(active)
    
    useFrame((state, delta) => {
    //     state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 55 : 42, 0.05)
    //     if (zoom) {
    //         state.camera.position.lerp(v.set(0, 40, 150), 0.01)
    //         // state.camera.lookAt(0, 0, 0)
    //     }
    //     // state.camera.position.lerp(v.set(zoom ? 0 : 0, zoom ? 40 : 35, zoom ? 150 : 125), 0.01)
        
    //     state.camera.updateProjectionMatrix()

    // bring active item closer to camera
        ref.current.position.lerp(v.set(
            props.activeItem == null ? props.position[0] :
            props.activeItem == props.section ? 0 :
            props.position[0],

            props.activeItem == null ? props.position[1] :
            props.activeItem == props.section ? props.position[1] - 3 :
            -20,

            props.activeItem == null ? props.position[2] :
            props.activeItem == props.section ? 55 :
            props.position[2],
        ), 0.05)
        // console.log(ref.current.rotation.z % (Math.PI*2))
        if (props.activeItem != props.section && ref.current.rotation.z % (Math.PI*2) >= 0.0000000001) {
            ref.current.rotation.z = ref.current.rotation.z += delta * 1.5
        }
    })

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
            geometry={nodes[props.modelExtension].geometry} 
            rotation={[Math.PI / 2, 0, 0]} 
            material={shinyMaterial}
        >
            {/* <meshStandardMaterial color={0x000000}/> */}
            {/* <meshStandardMaterial color={0xFFFFFF}/> */}
        </mesh>
    )
}

export default ModelLoader