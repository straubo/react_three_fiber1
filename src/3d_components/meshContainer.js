import * as THREE from 'three'
import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Text, MeshDistortMaterial, Environment, CameraShake } from '@react-three/drei'
import { a as three, useSpring } from '@react-spring/three'
// import { a as web } from '@react-spring/web'
// import { useSpring } from 'react-spring'

import ModelLoader from './loader'
import Box2 from './origBox'
import LaptopLoader from './laptopLoader'
import Menu3D from './menu3D'
import Skybox from './skybox'

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
    return (<>
        <Caption>{`casey berman`}</Caption>
        <ModelLoader 
            scale={5}
            modelName={'headset'} 
            modelExtension={'VR_simple'}
            position={[0, 7, 0]}
            selectObj={props.selectObj}
            section={'work'}
        />
        <ModelLoader 
            scale={0.1} 
            modelName={'human'} 
            modelExtension={'BaseMesh_Man_Simple'}
            position={[-35, 0, 0]}
            selectObj={props.selectObj}
            section={'about'}
        />
        {/* <Box2 
            selectObj={props.selectObj}
        /> */}
        <LaptopLoader
            activeItem={props.currentObject}
            selectObj={props.selectObj}
        />
        <Skybox 
            activeItem={props.currentObject}
        />
        

        <Menu3D
            activeItem={props.currentObject}
        />
        <CameraShake yawFrequency={0} pitchFrequency={0} rollFrequency={0} intensity={0}/>
        <Environment preset="night" />

        {/* undulating sphere, only useful at radius~1 */}
        {/* <a.mesh>
        <sphereBufferGeometry  
            args={[2, 64, 64]} 
            >
            </sphereBufferGeometry>
            <MeshDistortMaterial 
                color={0x000000}
                distort={0.7}
                speed={1.4}
                />
        </a.mesh> */}

    </>)
}

export default MeshContainer