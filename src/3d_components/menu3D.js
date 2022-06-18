import ModelLoader5 from "./loader5"
import ModelLoader4 from "./loader4"
import ModelLoader3 from "./loader3"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"

function Menu3D(props) {
    const [mobile, setMobile] = useState(true)
    const ref = useRef()
    useFrame(({ camera }) => {
        // Move mesh to be flush with camera
        ref.current.position.copy(camera.position)
        ref.current.quaternion.copy(camera.quaternion)
        // Apply responsive offset
        ref.current.translateX(mobile ? 0 : -props.width/46.8)
        ref.current.translateY(mobile ? 1.9 : 2)
        ref.current.translateZ(-5)
    })
    return (
        <mesh
        ref={ref}
        visible={props.activeItem != null}
            >
            <ModelLoader4
                scale={mobile ? 0.0035 : 0.006} 
                modelName={'human'} 
                meshExtension={'BaseMesh_Man_Simple'}
                fullMeshExtension={'nodes.BaseMesh_Man_Simple.geometry'}
                position={mobile ?
                    // [-width/47, 3, 0] :
                    [-props.width/47, 0, 0] :
                    [0, -1, 0]
                }
                activeItem={props.activeItem}
                selectObj={props.selectObj}
            />
            <Text
                position={mobile ? [-props.width/47, -0.1, 0] : [0, -1.2, 0]}
                lineHeight={0.8}
                font="/Ki-Medium.ttf"
                fontSize={.18}
                material-toneMapped={false}
                anchorX="center"
                anchorY="middle"
                color={'#ffffff'}
            >about</Text>
            <ModelLoader3
                scale={0.2}
                modelName={'headset'}
                modelExtension={'VR_simple'}
                position={[0, -2.1, 0]}
                activeItem={props.activeItem}
                selectObj={props.selectObj}
            />
            <Text
                position={[0, -2.5, 0]}
                lineHeight={0.8}
                font="/Ki-Medium.ttf"
                fontSize={.18}
                material-toneMapped={false}
                anchorX="center"
                anchorY="middle"
                color={'#ffffff'}
            >work</Text>
            <ModelLoader5
                scale={0.2}
                modelName={'headset'} 
                modelExtension={'VR_simple'}
                position={[0, -3.8, 0]}
                activeItem={props.activeItem}
                selectObj={props.selectObj}
            />
            <Text
                position={[0, -4.2, 0]}
                lineHeight={0.8}
                font="/Ki-Medium.ttf"
                fontSize={.18}
                material-toneMapped={false}
                anchorX="center"
                anchorY="middle"
                color={'#ffffff'}
            >contact</Text>
        </ mesh>
    )
}

export default Menu3D