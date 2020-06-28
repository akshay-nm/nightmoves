import React, { useState, useRef, useEffect } from 'react';

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
      <div className='w-100 h-100'></div>
    </div>
  );
};

export default CameraDemo;