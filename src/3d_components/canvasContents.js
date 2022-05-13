import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls, CameraShake } from '@react-three/drei'
import Ocean from "../three_js_components/ocean"
import Box2 from './origBox'
import PostProcessingWrapper from '../three_js_components/postProcessing'
import LightingWrapper from '../three_js_components/lighting'
import ModelLoader from './loader'
import ModelLoader2 from './loader2'

function CanvasContents() {

    // const { camera, mouse } = useThree()
    // ^^ look into what this means!

    return (
        <Canvas camera={{ position: [0, 1, 100], fov: 55, near: 1, far: 20000 }}>
            <LightingWrapper />
            <Suspense fallback={null}>
                <Box2 />
                <PostProcessingWrapper />
                <Ocean />
                <OrbitControls makeDefault/>
                {/* tried generifying... try again later */}
                <ModelLoader 
                    scale={5} 
                    modelName={'headset'} 
                    modelExtension={'VR_simple'}
                    position={[0, 7, 0]}
                />
                <ModelLoader2 
                    scale={0.1} 
                    modelName={'human'} 
                    meshExtension={'BaseMesh_Man_Simple'}
                    fullMeshExtension={'nodes.BaseMesh_Man_Simple.geometry'}
                    position={[-35, 0, 0]}
                />
                <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} intensity={0.5}/>
                {/* intensity={0.5} */}
            </Suspense>
            
        </Canvas>
    )
}

export default CanvasContents













// old stuff, will prob delete

// function Box(props) {
//     const mesh = useRef()
//     // Set up state for the hovered and active state
//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)
//     // Subscribe this component to the render-loop, rotate the mesh every frame
//     useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
//     // Return view, these are regular three.js elements expressed in JSX
//     return (
//       <mesh
//         {...props}
//         ref={mesh}
//         scale={active ? 30 : 20}
//         onClick={(event) => {setActive(!active)}}
//         onPointerOver={(event) => setHover(true)}
//         onPointerOut={(event) => setHover(false)}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//       </mesh>
//     )
//   }
  
//   class Box1Container extends React.Component {
//     render() {
//       return (
//         <>
//           <Box position={[-60, -.8, -3]} />
//           <Box position={[0, 0, -3]} />
//           <Box position={[60, 0, -3]} />
//         </>
//       );
//     }
//   }