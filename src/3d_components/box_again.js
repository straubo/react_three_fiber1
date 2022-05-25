import * as THREE from 'three'
import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three"

function MyRotatingBox(props) {
    const myMesh = React.useRef()
    const matRef = React.useRef()
    // const [active, setActive] = useState(false)

    // const { scale } = useSpring({
    //     scale: active ? 500 : 100,
    //     // config: config.wobbly
    // })

    const { color } = useSpring({
        color: props.activeItem == null ? 'black' : 
        props.activeItem == 'about' ? 'midnightblue' : 
        props.activeItem == 'work' ? 'whitesmoke' :
        'wheat'
        // active ? 'white' : 'black',
        // config: config.wobbly
    })
    console.log(props.activeItem)


//   useFrame(({ clock }) => {
//     const a = clock.getElapsedTime();
//     myMesh.current.rotation.x = a;
//   });

    return (
        <>
            {/* <animated.color 
                attach="background" 
                args={color}
            >
            </animated.color> */}

            <animated.mesh
                position={[0, 25, 0]}
                // scale={scale}
                scale={[20000, 20000, 20000]}
                // onClick={() => {
                //     setActive(!active)
                // }}
                ref={myMesh}
            >
            <boxBufferGeometry />
            <animated.meshPhongMaterial 
                ref={matRef}
                color={color} 
                // color={'green'}
                attach="material"
                side={THREE.BackSide}
            />
            </animated.mesh>
        </>
    );
}

export default MyRotatingBox