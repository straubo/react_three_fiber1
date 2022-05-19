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
    const { camera } = useThree();
    useEffect(() => {
        console.log("it's firing")
        // Add mesh to camera
        const meshRef = ref3.current;
        camera.add(meshRef);
    
        // Cleanup on unmount
        // return () => {
        //   camera.remove(meshRef);
        // };
      }, [camera, ref3.current]);

    const [active, setActive] = useState(false)
    const [zoom, set] = useState(false)

    useCursor(active)

    useFrame(({ camera }) => {
        // Move mesh to be flush with camera
        ref3.current.position.copy(camera.position);
        ref3.current.quaternion.copy(camera.quaternion);
    
        // Apply offset
        ref3.current.translateZ(-5);
      });

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
            position={[0, 0, -5]}
        >
            {/* <meshStandardMaterial color={0x000000}/> */}
            {/* <meshStandardMaterial color={0xFFFFFF}/> */}
        </mesh>
    )
}

export default ModelLoader3