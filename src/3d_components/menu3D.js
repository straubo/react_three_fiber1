import ModelLoader5 from "./loader5"
import ModelLoader4 from "./loader4"
import ModelLoader3 from "./loader3"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

function Menu3D(props) {
    const ref = useRef()
    useFrame(({ camera }) => {
        // Move mesh to be flush with camera
        ref.current.position.copy(camera.position)
        ref.current.quaternion.copy(camera.quaternion)
        // Apply offset - going to have to make this responsive
        ref.current.translateZ(-5)
        ref.current.translateX(-4.4) // full screen pc, 1 on mobile
        ref.current.translateY(2)
    })
    // apparently theres a drei thing for this called Billboard.. 
    // maybe refactor to use that later
    return (
        <mesh
        ref={ref}
        visible={props.activeItem != null}
            >
            <ModelLoader4
                scale={0.006} 
                modelName={'human'} 
                meshExtension={'BaseMesh_Man_Simple'}
                fullMeshExtension={'nodes.BaseMesh_Man_Simple.geometry'}
                position={[0, -1, 0]}
            />
            <ModelLoader3
                scale={0.2}
                modelName={'headset'}
                modelExtension={'VR_simple'}
                position={[0, -2.1, 0]}
            />
            <ModelLoader5
                scale={0.2}
                modelName={'headset'} 
                modelExtension={'VR_simple'}
                position={[0, -3.8, 0]}
            />
        </ mesh>
    )
}

export default Menu3D