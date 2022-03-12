import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import { Water } from './water.js';


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
      scale={active ? 3 : 2}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const hello = "hello";



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <div>
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <EffectComposer>
        <Pixelation granularity={20} />
      </EffectComposer>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-3, 0, -3]}  />
      <Box position={[0, 0, -3]} />
      <Box position={[3, 0, -3]} />
      {/* rotation={[Math.PI / 2, 0, 0]} */}
      <mesh visible position={[0, -3, -3]} rotation={[-1.6, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        {/* color="blue" */}
        <meshStandardMaterial />
      </mesh>
      {/* </div> */}
    </Canvas>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
