import React, { useState, useEffect } from 'react'

const Dummy = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setWidth(10)
      setHeight(10)
    }, 1000)
  }, [])
  return (<div style={{ width, height }}></div>)
}

export default Dummy