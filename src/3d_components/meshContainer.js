import * as THREE from 'three'
import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import ModelLoader from './loader'
import ModelLoader2 from './loader2'
import Box2 from './origBox'

function MeshContainer(props) {
    const [currentLook, setCurrentLook] = useState(new THREE.Vector3(0, 0, 0))
    const [nextLook, setNextLook] = useState(new THREE.Vector3(0, 0, 0))
    const [currentObj, setCurrentObj] = useState(null)

    function updateCameraLook(a) {
        if (a == 'about') {
            if (currentObj != 'about') {
                setNextLook(new THREE.Vector3(0, 60, 0))
                setCurrentObj(a)
            } 
            else {
                setNextLook(new THREE.Vector3(0, 0, 0))
                setCurrentObj(null)
            }
        } else if (a == 'work') {
            if (currentObj != 'work') {
                setNextLook(new THREE.Vector3(0, -25, 0))
                setCurrentObj(a)
            } 
            else {
                setNextLook(new THREE.Vector3(0, 0, 0))
                setCurrentObj(null)
                // state.camera.position.lerp(v.set(0, 40, 150), 0.01)
                // state.camera.updateProjectionMatrix();
                //  ^^ same treatment
            }
        } else if (a == 'contact') {
            if (currentObj != 'contact') {
                setNextLook(new THREE.Vector3(-100, 0, 0))
                // we're going to turn around and have the 
                // text be half black half white ya know?
                setCurrentObj(a)
            } 
            else {
                setNextLook(new THREE.Vector3(0, 0, 0))
                setCurrentObj(null)
                // state.camera.position.lerp(v.set(0, 40, 150), 0.01)
                // state.camera.updateProjectionMatrix();
                //  ^^ same treatment
            }
        }
    }
    useFrame((state, delta) => {
        state.camera.lookAt(currentLook)
        setCurrentLook(currentLook.lerp(nextLook, 0.09))
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
        <Box2 
            updatedCameraDirection={updateCameraLook}
        />
    </>)
}

export default MeshContainer