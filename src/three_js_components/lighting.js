function LightingWrapper() {
    return (
        <>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[100, 100, 100]} />
            <pointLight position={[-100, -100, -100]} />
        </>
    )
}

export default LightingWrapper;