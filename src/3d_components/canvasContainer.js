import React, {Suspense} from 'react';
import { Canvas,  } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import Ocean from "../three_js_components/ocean"
import { Html } from '@react-three/drei/web'
// import PostProcessingWrapper from '../three_js_components/postProcessing'
import LightingWrapper from '../three_js_components/lighting'
import MeshContainer from './meshContainer'
// import { OrbitControls } from '@react-three/drei'
import "../styles/index.css"

function CanvasContainer(props) {
  const {scroll, ...other} = props
  console.log(other)
  return (
    <Canvas
      shadows
      onCreated={(state) => state.events.connect(props.overlay.current)}
      camera={{ position: [0, 10, 80], fov: 55, near: 1, far: 20000 }}
      raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
    >
    <LightingWrapper />
    <Suspense fallback={<Html center className="loading" children="Loading..." />}>
      <Ocean />
      <MeshContainer
        currentObject={props.currentObj} 
        selectObj={props.selectObj}
        scroll={props.scroll}
      />
      <Stars radius={70} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      {/* <PostProcessingWrapper /> */}
    </Suspense>
    </Canvas>
  )
}

export default CanvasContainer