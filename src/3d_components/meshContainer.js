import * as THREE from 'three'
import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import ModelLoader from './loader'
import ModelLoader2 from './loader2'
import ModelLoader3 from './loader3'
import Box2 from './origBox'
import Menu3D from './menu3D'
import { Text, Text3D, MeshDistortMaterial, PointMaterial, Environment, CameraShake } from '@react-three/drei'
import LaptopLoader from './laptopLoader'

function Caption({ children }) {
    const { width } = useThree((state) => state.viewport)
    return (
      <Text
        position={[0, 18, -5]}
        lineHeight={0.8}
        font="/Ki-Medium.ttf"
        fontSize={width / 8}
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
    // useFrame((state) => {
    //     state.camera.lookAt(currentLook)
    //     setCurrentLook(currentLook.lerp(nextLook, 0.09))
    //     // setCurrentCameraPosition(new THREE.Vector3([state.camera.position.x, state.camera.position.y, state.camera.position.z ]))
    //     // console.log(state.camera.position)
    //     // console.log(currentCameraPosition)
    // })
    // const fontUrl = './3dfont.json'
    return (<>
    <color attach="background" args={
        props.currentObject == null ? ['black'] : 
        props.currentObject == 'about' ? ['pink'] : 
        props.currentObject == 'work' ? ['whitesmoke'] :
        ['wheat']} 
    />
        {/* <Text3D font={fontUrl} {...textOptions}>
            Hello world!
            <meshNormalMaterial />
        </Text3D> */}

        <Caption>{`casey berman`}</Caption>
        {/* <ModelLoader 
            scale={5}
            modelName={'headset'} 
            modelExtension={'VR_simple'}
            position={[0, 7, 0]}
            updatedCameraDirection={props.selectObj}
        /> */}
        <ModelLoader2 
            scale={0.1} 
            modelName={'human'} 
            meshExtension={'BaseMesh_Man_Simple'}
            fullMeshExtension={'nodes.BaseMesh_Man_Simple.geometry'}
            position={[-35, 0, 0]}
            updatedCameraDirection={props.selectObj}
        />
        <Box2 
            updatedCameraDirection={props.selectObj}
        />
        <LaptopLoader />
        <Menu3D
            // activeItem={currentObj}
            activeItem={props.currentObject}
        />
        <CameraShake yawFrequency={0} pitchFrequency={0} rollFrequency={0} intensity={0}/>
        <Environment preset="night" />
        {/* undulating sphere, only useful at radius=1 */}
        {/* <mesh
            position={[0, 0, 0]}
        >
            <sphereBufferGeometry  
            args={[1, 64, 64]} 
            >
            </sphereBufferGeometry>
            <MeshDistortMaterial 
                color={0x000000}
                distort={0.7}
                speed={1.4}
                />
        </mesh> */}
    </>)
}

export default MeshContainer