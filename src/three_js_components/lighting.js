function LightingWrapper() {
    return (
        <>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[100, 100, 100]} />
            <pointLight position={[-100, -100, -100]} />
            <directionalLight position={[0, 8, 5]} castShadow intensity={1} shadow-camera-far={70} />
        </>
    )
}

export default LightingWrapper;