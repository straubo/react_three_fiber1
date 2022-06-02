// todo: if site has been init-ed, and props currentObj is not contact,
// make sure laptop is closed. is fine for now I think.

import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, ContactShadows, Html } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import LaptopScreen from '../2d_components/laptopScreen'

const vec = new THREE.Vector3()

// function Model({ open, hinge, laptopChange, ...props }) {
function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/mac-draco.glb')
    const [hovered, setHovered] = useState(false)
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    
    useFrame((state, delta) => {

        // rotation
        const t = state.clock.getElapsedTime()

        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y, !props.beenInit ? 
                Math.sin(t / 3) / 4 :
                group.current.rotation.y -= delta * 8.5,
                0.1
        )
        group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, !props.beenInit ? Math.sin(t) / 20 : 0, 0.1)

        // old
        // group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, props.open ? 0 : -25, 0.007)
        // group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, props.open ? 0 : 60, 0.007)
        // group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, props.open ? -3 : -75, 0.014)
        
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, !props.beenInit ? 0 : 35, 0.01)
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, !props.beenInit ? -3 : 1, 0.007)
        group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, !props.beenInit ? -7 : -75, 0.014)
    })

    return (
        <group
            ref={group}
            {...props}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={(e) => setHovered(false)}
            dispose={null}
        >
            <three.group rotation-x={props.hinge} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
                    <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
                    <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} >
                        <Html 
                            scale={1} 
                            rotation-x={-Math.PI/2} 
                            position={[0, 0.05, -0.09]}
                            transform 
                            occlude
                        >
                            <LaptopScreen 
                                laptopChange={props.laptopChange}
                            />
                        </Html>
                    </mesh>
                </group>
            </three.group>
            <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
                <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
            </group>
            <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
        </group>
    )
}

export default function LaptopLoader(props) {
    const [open, setOpen] = useState(true)
    const [beenInit, setBeenInit] = useState(false)

    // spring animation interpolates between 0 and 1
    const hingeSpring = useSpring({ open: Number(open) })

    const laptopChange = function() {
        if(!beenInit) {
            setBeenInit(true)
            setOpen(false)
        } else {
            props.selectObj('contact')
            setOpen(!open)
        }
    }

    return (   
        <group
            onClick={(e) => {
                e.stopPropagation()
                laptopChange()
            }}
            position={[0, 6.3, 77]}
        >
            <Model 
                open={open}
                beenInit={beenInit}
                hinge={hingeSpring.open.to([0, 1], [1.575, -0.25])}
                laptopChange={laptopChange}
                scale={1.8}
                activeItem={props.activeItem}
            />
        </group>
  )
}