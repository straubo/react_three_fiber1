import * as THREE from 'three'
import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls, CameraShake, Environment } from '@react-three/drei'
import Ocean from "../three_js_components/ocean"
import PostProcessingWrapper from '../three_js_components/postProcessing'
import LightingWrapper from '../three_js_components/lighting'
import MeshContainer from './meshContainer';

function CanvasContents(props) {
    return (
        <Canvas camera={{ position: [0, 10, 80], fov: 55, near: 1, far: 20000 }}>
            <LightingWrapper />
            {/* <color attach="background" args={['black']} /> */}
            <Suspense fallback={null}>
                {/* <PostProcessingWrapper /> */}
                <Ocean />
                {/* <OrbitControls makeDefault /> */}
                <MeshContainer 
                    currentObject={props.currentObj} 
                    selectObj={props.setCurrentObject}
                />
                <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} intensity={0.5}/>
                <Environment preset="night" />
            </Suspense>
            
        </Canvas>
    )
}

export default CanvasContents