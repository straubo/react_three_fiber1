import ModelLoader3 from "./loader3"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber";

function Menu3D() {
    const ref = useRef()
    useFrame(({ camera }) => {
        // Move mesh to be flush with camera
        ref.current.position.copy(camera.position)
        ref.current.quaternion.copy(camera.quaternion)
        // ref.current.rotation.x += 0.9
    
        // Apply offset
        // going to have to make this responsive
        ref.current.translateZ(-5)
        // ref.current.translateX(-2) // 1 on mobile
        ref.current.translateX(-4) // full screen pc
        ref.current.translateY(1.7)
    });
    return (
        <mesh
        ref={ref}
            >
            <ModelLoader3
                scale={.2}
                modelName={'headset'} 
                modelExtension={'VR_simple'}
                position={[0, 0, 0]}
            />
            <ModelLoader3
                scale={.2}
                modelName={'headset'} 
                modelExtension={'VR_simple'}
                position={[0, -2, 0]}
            />
            <ModelLoader3
                scale={.2}
                modelName={'headset'} 
                modelExtension={'VR_simple'}
                position={[0, -4, 0]}
            />
        </ mesh>
    )
}

export default Menu3D