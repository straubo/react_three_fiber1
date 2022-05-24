import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function LightingWrapper() {
    // const light = useRef()
    useFrame((state) => {
        // light.current.position.x = state.mouse.x * 20
        // light.current.position.y = state.mouse.y * 20
    })

    return (
        <>
            <ambientLight />
            {/* intensity={env} */}
            {/* intensity={0} */}
            {/* <pointLight ref={light} position-z={-15} color="#F8C069" decay={2} /> */}
            {/* <pointLight position={[10, 10, 10]} /> */}
            {/* <pointLight position={[100, 100, 100]} /> */}
            {/* <pointLight position={[-100, -100, -100]} /> */}
            {/* <directionalLight position={[0, 8, 5]} castShadow intensity={1} shadow-camera-far={70} /> */}
        </>
    )
}

export default LightingWrapper;