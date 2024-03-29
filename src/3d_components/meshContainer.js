import React, { useState, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber'
import { Text, Environment } from '@react-three/drei'
import ModelLoader from './loader'
import LaptopLoader from './laptopLoader'
import Menu3D from './menu3D'
import Skybox from './skybox'
import Noodles from './Noodles'
import * as THREE from 'three'
import negx from '../3d_assets/nightSkyBox/negx.jpg'
import negy from '../3d_assets/nightSkyBox/negy.jpg'
import negz from '../3d_assets/nightSkyBox/negz.jpg'
import posx from '../3d_assets/nightSkyBox/posx.jpg'
import posy from '../3d_assets/nightSkyBox/posy.jpg'
import posz from '../3d_assets/nightSkyBox/posz.jpg'


function Caption(props) {
  return (
    <Text
      position={
        props.activeItem == null ?
        [0, 30, -5] : 
        [0, -20, -75] 
      }
      color={
        props.activeItem == null || 
        props.activeItem === 'about' ? 
        '#ffffff' : props.activeItem === 'work' ?
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
  const v = new THREE.Vector3()
  const [mobile, setMobile] = useState(false)
  const { width } = useThree((state) => state.viewport)
  
  useEffect(() => {
      width < 71.9 ? setMobile(true) : setMobile(false)        
  }, [width])
  
  useFrame((state) => {
    // if (props.currentObject === "about") {
    //     state.camera.position.lerp(v.set(0, 175, 150), 0.04)
    // } else {
    state.camera.position.lerp(v.set(0, 10, 80), 0.04)
    // }
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
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
          position={[-width/3.6, 3, 0]}
          selectObj={props.selectObj}
          activeItem={props.currentObject}
          section={'about'}
          // color={'#3E6E90'} // extreme blue color
          color={'#24282b'}
          // selectedColor={'pink'}
          // selectedColor={'#1f3e2c'}
          selectedColor={'#24282b'}
      />
      <ModelLoader
        scale={3}
        modelName={'headset'} 
        modelExtension={'VR_simple'}
        position={[0, 7, 0]}
        selectObj={props.selectObj}
        activeItem={props.currentObject}
        section={'work'}
        // color={'#679DAE'}
        color={'#000000'}
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

      <Menu3D
        selectObj={props.selectObj}
        activeItem={props.currentObject}
        width={width}
        mobile={mobile}
      />
      {/* <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} intensity={0.2}/> */}
      <Environment preset="night" />
      {/* <Environment files={[posx, negx, posy, negy, posz, negz]} /> */}
      <Noodles
        activeItem={props.currentObject}
      />
    </>
  )
}

export default MeshContainer