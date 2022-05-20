import React, { useRef, useMemo } from "react";
import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import waterNormalsJPEG from '../3d_assets/waternormals.jpg';

// import { Water } from "three/examples/jsm/objects/Water.js";
import { Water } from 'three-stdlib'
extend({ Water });

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, waterNormalsJPEG);
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
		textureWidth: 512,
		textureHeight: 512,
		waterNormals,
		sunDirection: new THREE.Vector3(),
		sunColor: 0xffffff,
		// waterColor: 0x001e0f,
		waterColor: 0x000000,
		distortionScale: 3.7,
		fog: false,
		format: gl.encoding
    }),
    [waterNormals]
  )
	useFrame((state, delta) => {
		ref.current.material.uniforms.time.value += (delta * 3/5 )
	})
	return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

export default Ocean;