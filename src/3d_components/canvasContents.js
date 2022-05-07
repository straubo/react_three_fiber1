
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Ocean from "../three_js_components/ocean"
import PostProcessingWrapper from './three_js_components/postProcessing'
import LightingWrapper from './three_js_components/lighting.js';
function CanvasContents() {
    return (
        <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
            <Ocean />
        </Canvas>
    )
}

export default CanvasContents