import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three"

function MyRotatingBox() {
    const myMesh = React.useRef();
    const [active, setActive] = useState(false);

    const { scale } = useSpring({
        scale: active ? 1.5 : 1,
        config: config.wobbly
    });

    const { color } = useSpring({
        color: active ? ['red'] : ['blue'],
        config: config.wobbly
    });


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
            scale={scale}
            onClick={() => setActive(!active)}
            ref={myMesh}
            >
            <boxBufferGeometry />
            <meshPhongMaterial color="royalblue" />
            </animated.mesh>
        </>
    );
}

export default MyRotatingBox