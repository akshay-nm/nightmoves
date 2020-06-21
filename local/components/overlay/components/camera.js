import React, { useState, useEffect, useRef } from 'react';
import useSWR from 'swr';

const Camera = ({stream}) => {

  const {data, error} = useSWR('/api/setting/camera', url => fetch(url).then(r => r.json()), {refreshInterval: 1000})

  const [size, setSize] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const cameraRef = useRef(null)

  useEffect(() => {
    if(data) {
      setSize(data.values.size)
      setX(data.values.x)
      setY(data.values.y)
    }
  }, [data])

  useEffect(() => {
    if(cameraRef.current && !cameraRef.current.srcObject) {
      cameraRef.current.srcObject = stream
    }
  })

  return (
    <video 
      ref={cameraRef} 
      className='position-absolute rounded shadow' 
      style={{ height: `${size}%`, left: `${x}%`, top:`${y}%`, zIndex: 5 }} />
  );
};

export default Camera;