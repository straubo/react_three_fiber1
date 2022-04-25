import React, {useRef, Suspense, useState, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostProcessingWrapper from './postProcessing'
import reportWebVitals from './reportWebVitals';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import waterNormalsJPEG from './waternormals.jpg';

// water
import { Water } from 'three-stdlib'
extend({ Water })

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
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
      onClick={(event) => {setActive(!active)}}
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
    // ref.current.position.y = 11 + Math.sin(state.clock.elapsedTime) * 20
    if (active) {
      ref.current.position.y = ref.current.position.y
    } else {
      ref.current.position.y = 11 + Math.sin(state.clock.elapsedTime) * 20
    }
    ref.current.rotation.x = ref.current.rotation.z += delta
  })
  return (
    <mesh 
      ref={ref} 
      scale={20}
      {...props}
      onClick={(event) => setActive(!active)}
    >
      <icosahedronGeometry />
      {/* '001e0f */}
      <meshStandardMaterial color={active ? 0x629f60 : 0xffffff} />
    </mesh>
  )
}

class Box1Container extends React.Component {
  render() {
    return (
      <>
        <Box position={[-60, -.8, -3]} />
        <Box position={[0, 0, -3]} />
        <Box position={[60, 0, -3]} />
      </>
    );
  }
}

function LightingWrapper() {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[100, 100, 100]} />
      <pointLight position={[-100, -100, -100]} />
    </>
  )
}

function UIWrapper() {
  return (
    <div className ='uiWrapper'>
      <div className='siteHeader'>
        casey berman
      </div>
      <div className='siteBody'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  )
}

function CanvasWrapper() {
  return (
    <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
      <LightingWrapper />
      <Suspense fallback={null}>
        <Ocean />
        <Box2 />
        <PostProcessingWrapper />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

ReactDOM.render(
  <React.StrictMode>
      <UIWrapper />
      <CanvasWrapper />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
