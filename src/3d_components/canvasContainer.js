import React, {Suspense} from 'react';
import { Canvas,  } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Ocean from "../three_js_components/ocean"
import PostProcessingWrapper from '../three_js_components/postProcessing'
import LightingWrapper from '../three_js_components/lighting'
import MeshContainer from './meshContainer'

function CanvasContainer(props) {
    return (
        <Canvas 
            shadows
            onCreated={(state) => state.events.connect(props.overlay.current)}
            camera={{ position: [0, 10, 80], fov: 55, near: 1, far: 20000 }}
            // camera={{ position: [0, 70, 80], fov: 55, near: 1, far: 20000 }}
            raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
        >
            <LightingWrapper />
            <Suspense fallback={null}>
                {/* <PostProcessingWrapper />    */}
                <Ocean />
                {/* <OrbitControls makeDefault /> */}
                <MeshContainer 
                    currentObject={props.currentObj} 
                    selectObj={props.selectObj}
                    scroll={props.scroll}
                />
                <Stars radius={1400} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Suspense>
            
        </Canvas>
    )
}

export default CanvasContainer