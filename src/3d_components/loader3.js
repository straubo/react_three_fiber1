// tried this based on this:
// https://stackoverflow.com/questions/68796567/react-three-fiber-lock-object-position-in-canvas
// try again tomorrow?
import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import {useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useCursor } from "@react-three/drei"


function ModelLoader3 (props) {   
    const v = new THREE.Vector3()
    // ref and mesh/material stuff 
    const {nodes, materials} = useGLTF('/headset.glb')
    const shinyMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#000000').convertSRGBToLinear(),
        roughness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0,
    })


    const ref3 = useRef()

    const [active, setActive] = useState(false)
    const [zoom, set] = useState(false)

    useCursor(active)

    return (
        <mesh
            ref={ref3} 
            {...props}
            onClick={() => {
                set(!zoom)
                // props.updatedCameraDirection('work')
            }} 
            onPointerOver={() => setActive(true)} 
            onPointerOut={() => setActive(false)}
            receiveShadow
            castShadow
            geometry={nodes.VR_simple.geometry} 
            rotation={[Math.PI / 2, 0, 0]} 
            material={shinyMaterial}
        ></mesh>
    )
}

export default ModelLoader3