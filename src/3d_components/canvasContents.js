import * as THREE from 'three'
import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls, CameraShake } from '@react-three/drei'
import Ocean from "../three_js_components/ocean"
import PostProcessingWrapper from '../three_js_components/postProcessing'
import LightingWrapper from '../three_js_components/lighting'
import CameraHandler from './cameraHandler'
import MeshContainer from './meshContainer';

function CanvasContents() {
    // for camera direction lerping
    // let currentLook = new THREE.Vector3(0, 0, 0)
    const startLook = new THREE.Vector3(0, 0, 0)
    const endLook = new THREE.Vector3(0, 50, 0)

    const [currentLook, setCurrentLook] = useState(new THREE.Vector3(0, 0, 0))

    // const [activeMesh, setActiveMesh] = useState(null)

    // const { camera, mouse } = useThree()
    // ^^ look into what this means!
    return (
        <Canvas camera={{ position: [0, 1, 80], fov: 55, near: 1, far: 20000 }}>
            {/* <CameraHandler
                currentLook={currentLook}
            /> */}
            <LightingWrapper />
            <Suspense fallback={null}>
                <PostProcessingWrapper />
                <Ocean />
                <OrbitControls />
                {/* makeDefault */}
                <MeshContainer />
                {/* <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} intensity={0.5}/> */}
            </Suspense>
            
        </Canvas>
    )
}

export default CanvasContents