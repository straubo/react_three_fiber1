import React, {useRef, Suspense, useState, useMemo} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './index.css';

// 2d
import UIWrapper from './2d_components/uiWrapper';

// 3D helpers
import Ocean from './three_js_components/ocean';
import PostProcessingWrapper from './three_js_components/postProcessing';
import LightingWrapper from './three_js_components/lighting.js';

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
    // create var containing current location when clicked
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
function CanvasWrapper() {
  return (
    <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
      <LightingWrapper />
      <Suspense fallback={null}>
        <Ocean />
        {/* <Box2 /> */}
        {/* <PostProcessingWrapper /> */}
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

ReactDOM.render(
  <React.StrictMode>
      <UIWrapper className="uiContainer"/>
      <CanvasWrapper />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
