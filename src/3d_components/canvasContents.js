import * as THREE from 'three'
import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls, CameraShake } from '@react-three/drei'
import Ocean from "../three_js_components/ocean"
import Box2 from './origBox'
import PostProcessingWrapper from '../three_js_components/postProcessing'
import LightingWrapper from '../three_js_components/lighting'
import ModelLoader from './loader'
import ModelLoader2 from './loader2'
import CameraHandler from './cameraHandler'

function CanvasContents() {
    // for camera direction lerping
    let currentLook = new THREE.Vector3(0, 0, 0)
    const startLook = new THREE.Vector3(0, 0, 0)
    const endLook = new THREE.Vector3(0, 50, 0)

    // const { camera, mouse } = useThree()
    // ^^ look into what this means!
    function updateCameraLook(a) {
        if (a == 't-pose') {
            currentLook = endLook
            console.log(currentLook)
            cameraHandle.current.checkingRef()
        }
    }

    return (
        <Canvas camera={{ position: [0, 1, 80], fov: 55, near: 1, far: 20000 }}>
            <CameraHandler
                lookAtThis={currentLook}
                ref={cameraHandle}
            />
            <LightingWrapper />
            <Suspense fallback={null}>
                <Box2 />
                <PostProcessingWrapper />
                <Ocean />
                {/* <OrbitControls /> */}
                {/* makeDefault */}
                {/* tried generifying as they're largely the same... 
                try again later */}
                <ModelLoader 
                    scale={5}
                    modelName={'headset'} 
                    modelExtension={'VR_simple'}
                    position={[0, 7, 0]}
                />
                <ModelLoader2 
                    scale={0.1} 
                    modelName={'human'} 
                    meshExtension={'BaseMesh_Man_Simple'}
                    fullMeshExtension={'nodes.BaseMesh_Man_Simple.geometry'}
                    position={[-35, 0, 0]}
                    updatedCameraDirection={updateCameraLook}
                />
                {/* <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} intensity={0.5}/> */}
            </Suspense>
            
        </Canvas>
    )
}

export default CanvasContents