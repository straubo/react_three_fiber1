import { useGLTF } from "@react-three/drei";


function ModelLoader () {
    const { nodes, materials } = useGLTF('/headset.glb')
    console.log(nodes)
    console.log(materials)
    return (
        <mesh scale={5} geometry={nodes.VR_simple.geometry} rotation={[Math.PI / 2, 0, 0]}>

        </mesh>
    )
}

export default ModelLoader