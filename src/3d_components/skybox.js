import * as THREE from 'three'
import React from "react";
import { useSpring, animated, config } from "@react-spring/three"

function Skybox(props) {
    const matRef = React.useRef()
    const { color } = useSpring({
        color: props.activeItem == null ? 'black' : 
        // props.activeItem === 'about' ? 'pink' : 
        props.activeItem === 'about' ? '#1f3e2c' : 
        props.activeItem === 'work' ? '#252D36' :
        'wheat'
    })

    return (
        <>
            <animated.mesh
                position={[0, 25, 0]}
                scale={[20000, 20000, 20000]}
            >
            <boxBufferGeometry />
            <animated.meshPhongMaterial 
                ref={matRef}
                color={color}
                attach="material"
                side={THREE.BackSide}
            />
            </animated.mesh>
        </>
    );
}

export default Skybox