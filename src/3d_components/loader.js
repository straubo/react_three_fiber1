import { useGLTF } from "@react-three/drei";

function ModelLoader () {
    const gltf = useGLTF('../3d_assets/headset.glb')
    return (<primative object={gltf.scene} />)
}

export default ModelLoader