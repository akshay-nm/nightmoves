import React, { useRef, useState, useEffect } from 'react';
import OverlayDemo from './demo/overlay-demo';

const Output = ({ overlayWidth, overlayHeight, isCameraVisible, cameraSize, cameraX, cameraY }) => {
  const outputContainerRef = useRef(null)
  const [visibleWidth, setVW] = useState(0)
  const [visibleHeight, setVH] = useState(0)

  // calculate scaling factor
  useEffect(() => {
    if(outputContainerRef.current && overlayWidth && overlayHeight) {
      let scallingFactor = overlayWidth/overlayHeight
      setVW(outputContainerRef.current.offsetWidth)
      setVH(outputContainerRef.current.offsetWidth / scallingFactor)
    }
  })

  return (
    <div ref={outputContainerRef} className='border'>
      <OverlayDemo 
        width={visibleWidth} 
        height={visibleHeight}
        isCameraVisible={isCameraVisible}
        cameraSize={cameraSize}
        cameraX={cameraX}
        cameraY={cameraY} />
    </div>
  );
};

export default Output;