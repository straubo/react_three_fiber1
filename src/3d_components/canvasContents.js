import React, {useRef, Suspense, useState, useMemo} from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Ocean from "../three_js_components/ocean"
import Box2 from './origBox'
import PostProcessingWrapper from '../three_js_components/postProcessing'
import LightingWrapper from '../three_js_components/lighting'
import ModelLoader from './loader'

function CanvasContents() {

    // const { camera, mouse } = useThree()
    // ^^ look into what this means!
    // useFrame((state) => {
        // state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 10 : 42, 0.05)
        // state.camera.position.lerp(v.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), 0.05)
        // state.camera.lookAt(0, 0, 0)
        // state.camera.updateProjectionMatrix()
    // })

    return (
        <Canvas camera={{ position: [0, 1, 100], fov: 55, near: 1, far: 20000 }}>
            <LightingWrapper />
            <Suspense fallback={null}>
                <Box2 />
                <PostProcessingWrapper />
                <Ocean />
                <OrbitControls makeDefault/>
                <ModelLoader />
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