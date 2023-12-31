import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from './state';

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1200;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = [0, 2, 15];
    if(snap.intro) {
      if(isBreakpoint) targetPosition [0, 2, 15];
      if(isMobile) targetPosition [0, 2, 15];
    } else {
      if(isMobile) targetPosition = [0, 2, 15];
      else targetPosition = [0, 2, 15];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)
    
    // set the model rotation smoothly

  })


  return <group ref={group}>{children}</group>
}

export default CameraRig