import React, { useState, useEffect } from 'react';
import Camera from './components/camera';
import useSWR from 'swr';

const Overlay = () => {
  const {data, error} = useSWR('/api/setting/overlay', url => fetch(url).then(r => r.json()), { refreshInterval: 1000 })  

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const [stream, setStream] = useState(null)

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        setStream(stream)
      })
  }, [])
  
  useEffect(() => {
    if(data) {
      setWidth(data.values.width)
      setHeight(data.values.height)
    }
  }, [data])

  return (
    <div style={{ width, height, position:'relative' }}>
      <Camera stream={stream} />
    </div>
  );
};

export default Overlay;