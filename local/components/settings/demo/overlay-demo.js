import React from 'react';
import CameraDemo from './camera-demo';

const OverlayDemo = ({ width, height, isCameraVisible, cameraSize, cameraX, cameraY }) => {
  return (
    <div className='relative' style={{ width, height }}>
      {isCameraVisible? <CameraDemo size={cameraSize} x={cameraX} y={cameraY} /> : ''}
    </div>
  );
};

export default OverlayDemo;