import React from 'react';
import { useThree, useLoader } from '@react-three/fiber'
import { Text, MeshDistortMaterial, Environment, CameraShake } from '@react-three/drei'
import { a as three, useSpring } from '@react-spring/three'
// import { a as web } from '@react-spring/web'
// import { useSpring } from 'react-spring'

import ModelLoader from './loader'
import Box2 from './origBox'
import LaptopLoader from './laptopLoader'
import Menu3D from './menu3D'
import Skybox from './skybox'
import Model from './Model'

function Caption(props) {
    const { width } = useThree((state) => state.viewport)
    return (
      <Text
        // position={[0, 18, -5]}
        position={
            props.activeItem == null ?
            [0, 30, -5] : 
            // props.activeItem == "contact" ? [0, -30, -75] :
            [0, 60, -75]
        }
        color={
            props.activeItem == null || 
            props.activeItem == 'about' ? 
            '#ffffff' : props.activeItem == 'work' ?
            '#000000' : '#001e0f'
        }
        lineHeight={0.8}
        font="/Ki-Medium.ttf"
        fontSize={width / 8}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle"
        >
        {props.children}
      </Text>
    )
}
  

function MeshContainer(props) {
    return (<>
        <Caption
            children={`casey berman`}
            activeItem={props.currentObject}
        />
        {/* mesh colors:
        green: 428F70
        deep blue(not navy but darker): 313D6B
        lighter blue (cyrulean?): 3E6E90
        lighter cyrulean: 679DAE
        "brighter" blue: 3957A5
        orange (slightly ugly, reflective): D46C40
        flesh-ish (not reflective): DDBF99
        deep grey: 3A3B3B
        bright yellow (n-r):F2BB1D
        cream: EADBC0
         */}
        <ModelLoader 
            scale={0.08} 
            modelName={'human'} 
            modelExtension={'BaseMesh_Man_Simple'}
            position={[-35, 3, 0]}
            selectObj={props.selectObj}
            activeItem={props.currentObject}
            section={'about'}
            color={'#3E6E90'}
            selectedColor={'pink'}
        />
        <ModelLoader
            scale={4}
            modelName={'headset'} 
            modelExtension={'VR_simple'}
            position={[0, 7, 0]}
            selectObj={props.selectObj}
            activeItem={props.currentObject}
            section={'work'}
            color={'#679DAE'}
            selectedColor={'#000000'}
        />
        <LaptopLoader
            activeItem={props.currentObject}
            selectObj={props.selectObj}
        />
        <Skybox 
            activeItem={props.currentObject}
        />
        
        {/* <Model 
        scroll={props.scroll}
        scale={3}
        /> */}

        <Menu3D
            selectObj={props.selectObj}
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