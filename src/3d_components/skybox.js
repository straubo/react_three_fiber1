import * as THREE from 'three'
import React from "react";
import { useSpring, animated, config } from "@react-spring/three"

function Skybox(props) {
    // const myMesh = React.useRef()
    const matRef = React.useRef()
    // const [active, setActive] = useState(false)

    // const { scale } = useSpring({
    //     scale: active ? 500 : 100,
    //     // config: config.wobbly
    // })

    const { color } = useSpring({
        color: props.activeItem == null ? 'black' : 
        props.activeItem == 'about' ? 'pink' : 
        props.activeItem == 'work' ? '#252D36' :
        'wheat'
        // '#F2BB1D',
    })

    return (
        <>
            <animated.mesh
                position={[0, 25, 0]}
                // scale={scale}
                scale={[20000, 20000, 20000]}
                // onClick={() => {
                //     setActive(!active)
                // }}
                // ref={myMesh}
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