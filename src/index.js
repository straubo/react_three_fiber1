import React, {useRef, Suspense, useState, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { EffectComposer, Pixelation, Outline } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import waterNormalsJPEG from './waternormals.jpg';

// bloom effects
import { Bloom, SSAO } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize } from 'postprocessing'

import { Water } from 'three-stdlib'

extend({ Water })

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  // const waterNormals = useLoader(THREE.TextureLoader, "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg")
  const waterNormals = useLoader(THREE.TextureLoader, waterNormalsJPEG);
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      // waterColor: 0x001e0f,
      waterColor: 0x000000,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 30 : 20}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Box2(props) {
  const ref = useRef()
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    ref.current.position.y = 11 + Math.sin(state.clock.elapsedTime) * 20
    ref.current.rotation.x = ref.current.rotation.z += delta
  })
  return (
    <mesh 
      ref={ref} 
      scale={20}
      {...props}
      onClick={(event) => setActive(!active)}
    >
      {/* <boxGeometry /> */}
      <icosahedronGeometry />
      {/* <meshStandardMaterial color={'black'} /> */}
      {/* <meshPhongMaterial color={active ? 'black' : 'grey'} /> */}
      {/* '001e0f */}
      <meshStandardMaterial color={active ? 0x629f60 : 0x001e0f} />
      
      {/* 0xffffff */}
    </mesh>
  )
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <>
    <div className='hi'>
      hi hi
    </div>
      <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <Box position={[-60, -.8, -3]}  />
        <Box position={[0, 0, -3]} />
        <Box position={[60, 0, -3]} />
        <Suspense fallback={null}>
          <EffectComposer>
            {/* <Bloom
              intensity={1} // The bloom intensity.
              blurPass={undefined} // A blur pass.
              width={Resizer.AUTO_SIZE} // render width
              height={Resizer.AUTO_SIZE} // render height
              kernelSize={KernelSize.LARGE} // blur kernel size
              luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
            /> */}
            {/* <Outline
              selection={[Box2]} // selection of objects that will be outlined
              selectionLayer={10} // selection layer
              blendFunction={BlendFunction.SCREEN} // set this to BlendFunction.ALPHA for dark outlines
              patternTexture={null} // a pattern texture
              edgeStrength={2.5} // the edge strength
              pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
              visibleEdgeColor={0xffffff} // the color of visible edges
              hiddenEdgeColor={0x22090a} // the color of hidden edges
              width={Resizer.AUTO_SIZE} // render width
              height={Resizer.AUTO_SIZE} // render height
              kernelSize={KernelSize.LARGE} // blur kernel size
              blur={false} // whether the outline should be blurred
              xRay={true} // indicates whether X-Ray outlines are enabled
            /> */}
          </EffectComposer>
          <Ocean />
          <Box2 />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
