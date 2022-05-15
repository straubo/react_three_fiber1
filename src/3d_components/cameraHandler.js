import * as THREE from 'three'
import {useFrame, useThree} from '@react-three/fiber'
import React, {useRef, Suspense, useState, useMemo} from 'react';

function CameraHandler(props) {
    // useFrame((state, delta) => {
    //     state.camera.lookAt(props.currentLook)
    // })
    let storedLook = new THREE.Vector3(0, 0, 0)
    const state = useThree()
    let chosenLookTarget = 0
    const lookTargets = [
        [0, 0, 0],
        [0, 50, 0]
        [25, 25, 0]
    ]
    // ComponentDidMount() {}
    // console.log('hello!')
    function lerpToNewDestination() {
        if (storedLook != props.currentLook) {
            // storedLook.lerp(props.currentLook, 0.2)
            // storedLook = props.currentLook
            chosenLookTarget += 1
        }
        // state.camera.lookAt(storedLook)
        // 
    }
    lerpToNewDestination()
    useFrame((state, delta) => {
        // state.camera.lookAt(
        //     (chosenLookTarget == 0) ? lookTargets[0] : 
        // )
        switch(chosenLookTarget) {
            case 1:
                state.camera.lookAt(lookTargets[1])
                break;
            case 2:
                state.camera.lookAt(lookTargets[2])
                break;
            default:
                state.camera.lookAt(lookTargets[0])
        }
        state.camera.updateProjectionMatrix()
        // console.log(storedLook)
    })
    // props is updating - investigate why useFrame isn't working
    return <></>
}

export default CameraHandler