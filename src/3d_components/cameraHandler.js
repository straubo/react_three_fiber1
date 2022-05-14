import * as THREE from 'three'
import {useFrame} from '@react-three/fiber'
import React, {useRef, Suspense, useState, useMemo} from 'react';

function CameraHandler(props) {
    cameraHandle = useRef()
    function checkingRef() {
        console.log('checking ref!')
    }
    useFrame((state, delta) => {
        state.camera.lookAt(props.lookAtThis)
    })
    return <></>
}

export default CameraHandler