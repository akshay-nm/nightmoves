import React, { useState, useRef, useEffect } from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const CameraDemo = ({ size, x, y }) => {
  const [width, setWidth] = useState(0)
  const cameraRef = useRef(null)

  useEffect(() => {
    let ref = cameraRef
    if(ref.current && ref.current.offsetHeight) {
      setWidth(ref.current.offsetHeight * 16 / 9)
    }
  })
  return (
    <div 
      className='border rounded absolute' 
      ref={cameraRef}
      style={{ height: `${size}%`, width, left: `${x}%`, top: `${y}%` }} >
      <OverlayTrigger
        placement='left'
        overlay={
          <Tooltip id={`tooltip-left`}>
            Camera
          </Tooltip>
        }
      >
        <div className='w-full h-full'></div>
      </OverlayTrigger>
    </div>
  );
};

export default CameraDemo;