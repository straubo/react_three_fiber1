import { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";


function ModelLoader (props) {
    const ref = useRef()
    const { nodes, materials } = useGLTF('/headset.glb')
    return (
        <mesh scale={5} geometry={nodes.VR_simple.geometry} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color={0x000000}/>
        </mesh>
    )
}

export default ModelLoader