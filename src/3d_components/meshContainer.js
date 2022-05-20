import * as THREE from 'three'
import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import ModelLoader from './loader'
import ModelLoader2 from './loader2'
import ModelLoader3 from './loader3'
import Box2 from './origBox'
import Menu3D from './menu3D'
import { Text, Text3D } from '@react-three/drei'

function Caption({ children }) {
    const { width } = useThree((state) => state.viewport)
    return (
      <Text
        position={[0, 15, -5]}
        lineHeight={0.8}
        font="/Ki-Medium.ttf"
        fontSize={width / 8}
        // color={}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle"
        color={'#001e0f'}
        >
        {children}
      </Text>
    )
  }

function MeshContainer(props) {
    const [currentLook, setCurrentLook] = useState(new THREE.Vector3(0, 0, 0))
    const [nextLook, setNextLook] = useState(new THREE.Vector3(0, 0, 0))
    const [currentObj, setCurrentObj] = useState(null)
    const { gl, size, camera } = useThree()
    const [currentCameraPosition, setCurrentCameraPosition] = useState(new THREE.Vector3(0, 30, 0))

    function updateCameraLook(a) {
        if (a == currentObj) {
            setNextLook(new THREE.Vector3(0, 0, 0))
            setCurrentObj(null)
            return
        }
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
        {/* <Text3D font={fontUrl} {...textOptions}>
            Hello world!
            <meshNormalMaterial />
        </Text3D> */}
        <Caption>{`casey berman`}</Caption>
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
        <Menu3D activeItem={currentObj}/>
    </>)
}

export default MeshContainer