import ModelLoader3 from "./loader3"
function Menu3D() {
    return (
        <>
         <ModelLoader3
            scale={1}
            modelName={'headset'} 
            modelExtension={'VR_simple'}
            // currentCameraPosition
            // [currentCameraPosition.x, currentCameraPosition.y, currentCameraPosition.z]
            // currentCameraPosition
            // new THREE.Vector3([currentCameraPosition.x, currentCameraPosition.y, currentCameraPosition.z])
            // position={[0, 0, -5]}
            // updatedCameraDirection={updateCameraLook}
        />
        </>
    )
}

export default Menu3D