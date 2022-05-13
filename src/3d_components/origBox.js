import React, {useRef, useState} from 'react'
import {useFrame} from '@react-three/fiber'
import { Octahedron } from '@react-three/drei'
import { OctahedronGeometry } from 'three'

function Box2(props) {
    const ref = useRef()
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
      // ref.current.position.y = 11 + Math.sin(state.clock.elapsedTime) * 20
      // create var containing current location when clicked
        
		// if (active) {
		// 	ref.current.position.y = ref.current.position.y
		// } else {
			// ref.current.position.y = 11 + Math.sin(state.clock.elapsedTime) * 20
		// }

        // this one the one always on
		// ref.current.rotation.x = ref.current.rotation.z += delta
        ref.current.rotation.y = ref.current.rotation.y -= delta * 2.5
        ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime * 3) * 2
    })
    return (
        <mesh 
            ref={ref} 
            scale={5}
			position={[35, 0, 0]}
            {...props}
            onClick={(event) => setActive(!active)}
        >
        {/* <icosahedronGeometry /> */}
        <octahedronGeometry />
        {/* '001e0f 0x629f60*/}
        <meshStandardMaterial color={active ? 0x001e0f : 0xffffff} />
      	</mesh>
    )
}
export default Box2