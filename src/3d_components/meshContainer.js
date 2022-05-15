import * as THREE from 'three'
import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import ModelLoader from './loader'
import ModelLoader2 from './loader2'
import Box2 from './origBox'

function MeshContainer() {
    const [currentLook, setCurrentLook] = useState(new THREE.Vector3(0, 0, 0))
    const [nextLook, setNextLook] = useState(new THREE.Vector3(0, 0, 0))
    const [currentObj, setCurrentObj] = useState(null)
    function updateCameraLook(a) {
        if (a == 't-pose') {
            if (currentObj != 't-pose') {
                setNextLook(new THREE.Vector3(0, 60, 0))
                setCurrentObj(a)
            } 
            else {
                setNextLook(new THREE.Vector3(0, 0, 0))
                setCurrentObj(null)
            }
        } else if (a == 'vr') {
            if (currentObj != 'vr') {
                setNextLook(new THREE.Vector3(0, -25, 0))
                setCurrentObj(a)
            } 
            else {
                setNextLook(new THREE.Vector3(0, 0, 0))
                setCurrentObj(null)
                // state.camera.position.lerp(v.set(0, 40, 150), 0.01)
                //  ^^ same treatment
            }
        }
    }
    useFrame((state, delta) => {
        state.camera.lookAt(currentLook)
        setCurrentLook(currentLook.lerp(nextLook, 0.1))
    })
    return (<>
        {/* tried generifying as they're largely the 
            same... try again later */}
        <ModelLoader 
            scale={5}
            modelName={'headset'} 
            modelExtension={'VR_simple'}
            position={[0, 7, 0]}
            updatedCameraDirection={updateCameraLook}
        />
        <ModelLoader2 
            scale={0.1} 
            modelName={'human'} 
            meshExtension={'BaseMesh_Man_Simple'}
            fullMeshExtension={'nodes.BaseMesh_Man_Simple.geometry'}
            position={[-35, 0, 0]}
            updatedCameraDirection={updateCameraLook}
        />
        <Box2 />
    </>)
}

export default MeshContainer