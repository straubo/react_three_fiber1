import ModelLoader5 from "./loader5"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"

function Menu3D(props) {
	const ref = useRef()
	useFrame(({ camera }) => {
		// Move mesh to be flush with camera
		ref.current.position.copy(camera.position)
		ref.current.quaternion.copy(camera.quaternion)
		// Apply responsive offset
		ref.current.translateX(props.mobile ? 0 : -props.width/38)
		ref.current.translateY(props.mobile ? 1.9 : 2)
		ref.current.translateZ(-5)
	})
	return (
		<mesh
			ref={ref}
			visible={props.activeItem != null}
		>
			<ModelLoader5
				scale={props.mobile ? 0.14 : 0.2}
				section={'about'}
				position={props.mobile ?
					[-props.width/47, 0.3, 0] :
					[0, -0.5, 0]
				}
				activeItem={props.activeItem}
				selectObj={props.selectObj}
				color={0xaaaaaa}
			/>
			<Text
				position={props.mobile ? [-props.width/47, 0, 0] : [0, -0.9, 0]}
				lineHeight={0.8}
				font="/Ki-Medium.ttf"
				fontSize={props.mobile ? .12 : .18}
				material-toneMapped={false}
				anchorX="center"
				anchorY="middle"
				color={'#ffffff'}
				onClick={()=> props.selectObj('about')}
			>about</Text>
			<ModelLoader5
				scale={props.mobile ? 0.14 : 0.2}
				section={'work'}
				position={props.mobile ? 
					[0, 0.3, 0] :
					[0, -2.1, 0]}
				activeItem={props.activeItem}
				selectObj={props.selectObj}
				color={0x555555}
			/>
			<Text
				position={props.mobile ? [0, 0, 0] : [0, -2.5, 0]}
				lineHeight={0.8}
				font="/Ki-Medium.ttf"
				fontSize={props.mobile ? .12 : .18}
				material-toneMapped={false}
				anchorX="center"
				anchorY="middle"
				color={'#ffffff'}
				onClick={()=> props.selectObj('work')}
			>work</Text>
			<ModelLoader5
				scale={props.mobile ? 0.14 : 0.2}
				section={'contact'}
				position={props.mobile ? 
						[props.width/47, 0.3, 0] : [0, -3.8, 0]}
				activeItem={props.activeItem}
				selectObj={props.selectObj}
				color={0x000000}
			/>
			<Text
				position={props.mobile ? [props.width/47, 0, 0] : [0, -4.2, 0]}
				lineHeight={0.8}
				font="/Ki-Medium.ttf"
				fontSize={props.mobile ? .12 : .18}
				material-toneMapped={false}
				anchorX="center"
				anchorY="middle"
				color={'#ffffff'}
				onClick={()=> props.selectObj('contact')}
			>contact</Text>
		</mesh>
	)
}

export default Menu3D