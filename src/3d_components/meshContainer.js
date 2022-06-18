import React, { useState, useEffect } from 'react';
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
import Noodles from './Noodles'

function Caption(props) {
    return (
      <Text
        position={
            props.activeItem == null ?
            [0, 30, -5] : 
            // props.mobile ?
            [0, -20, -75] 
            // :
            // [0, 58, -75]
        }
        color={
            props.activeItem == null || 
            props.activeItem == 'about' ? 
            '#ffffff' : props.activeItem == 'work' ?
            '#000000' : '#001e0f'
        }
        lineHeight={0.8}
        font="/Ki-Medium.ttf"
        fontSize={props.width / 8}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle"
        >
        {props.children}
      </Text>
    )
}
  

function MeshContainer(props) {
    const [mobile, setMobile] = useState(false)
    const { width } = useThree((state) => state.viewport)
    useEffect(() => {
        width < 50 ? setMobile(true) : setMobile(false)        
    });

    return (<>
        <Caption
            children={`casey berman`}
            activeItem={props.currentObject}
            width={width}
            mobile={mobile}
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
            // position={[-35, 3, 0]}
            position={[
                -width/3.6, 3, 0]}
            selectObj={props.selectObj}
            activeItem={props.currentObject}
            section={'about'}
            color={'#3E6E90'}
            selectedColor={'pink'}
        />
        <ModelLoader
            scale={3}
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
            width={width/3.6}
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
            width={width}
            mobile={mobile}
        />
        <CameraShake yawFrequency={0} pitchFrequency={0} rollFrequency={0} intensity={0}/>
        <Environment preset="night" />
        <Noodles 
            activeItem={props.currentObject}
        />

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