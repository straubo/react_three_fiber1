import React, {useRef, useState} from 'react'
import {useFrame} from '@react-three/fiber'

function Box2(props) {
    const ref = useRef()
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
      // ref.current.position.y = 11 + Math.sin(state.clock.elapsedTime) * 20
      // create var containing current location when clicked

		// if (active) {
		// 	ref.current.position.y = ref.current.position.y
		// } else {
		// 	ref.current.position.y = 11 + Math.sin(state.clock.elapsedTime) * 20
		// }
		ref.current.rotation.x = ref.current.rotation.z += delta
    })
    return (
        <mesh 
            ref={ref} 
            scale={20}
			position={[0, 35, 0]}
            {...props}
            onClick={(event) => setActive(!active)}
        >
        <icosahedronGeometry />
        {/* '001e0f 0x629f60*/}
        <meshStandardMaterial color={active ? 0x001e0f : 0xffffff} />
      	</mesh>
    )
}
export default Box2