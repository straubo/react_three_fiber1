import * as THREE from 'three'
import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import ModelLoader from './loader'
import ModelLoader2 from './loader2'
import ModelLoader3 from './loader3'
import Box2 from './origBox'

function MeshContainer(props) {
    const [currentLook, setCurrentLook] = useState(new THREE.Vector3(0, 0, 0))
    const [nextLook, setNextLook] = useState(new THREE.Vector3(0, 0, 0))
    const [currentObj, setCurrentObj] = useState(null)
    const { gl, size, camera } = useThree()
    const [currentCameraPosition, setCurrentCameraPosition] = useState(new THREE.Vector3(0, 30, 0))

    function updateCameraLook(a) {
        // let cameraPos = camera.position
        // setCurrentCameraPosition(cameraPos)
        console.log(currentCameraPosition)
        if (a == currentObj) {
            setNextLook(new THREE.Vector3(0, 0, 0))
            setCurrentObj(null)
            return
        }
        // cameraPosition = camera.position
        switch(a) {
            case 'about':
                setNextLook(new THREE.Vector3(0, 60, 0))
                break
            case 'work':
                setNextLook(new THREE.Vector3(0, -25, 0))
                break
            case 'contact':
                setNextLook(new THREE.Vector3(-100, 0, 0))
                break
        }
        setCurrentObj(a)
    }
    useFrame((state) => {
        state.camera.lookAt(currentLook)
        setCurrentLook(currentLook.lerp(nextLook, 0.09))
        // setCurrentCameraPosition(new THREE.Vector3([state.camera.position.x, state.camera.position.y, state.camera.position.z ]))
        // console.log(state.camera.position)
        // console.log(currentCameraPosition)
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
        <ModelLoader3
            scale={1}
            modelName={'headset'} 
            modelExtension={'VR_simple'}
            // currentCameraPosition
            // [currentCameraPosition.x, currentCameraPosition.y, currentCameraPosition.z]
            // currentCameraPosition
            // new THREE.Vector3([currentCameraPosition.x, currentCameraPosition.y, currentCameraPosition.z])
            // position={[0, 0, -5]}
            // updatedCameraDirection={updateCameraLook}
        />
    </>)
}

export default MeshContainer