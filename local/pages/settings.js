import React, { useState, useEffect } from 'react';
import OverlaySettings from '../components/settings/overlay-settings'
import Output from '../components/settings/output';
import CameraSettings from '../components/settings/camera-settings';
import useSWR from 'swr';

const Settings = () => {

  const { data: settingsData, error } = useSWR('/api/settings', url => fetch(url).then(r => r.json()), { refreshInterval: 1000 })

  const [overlayWidth, setOverlayWidth] = useState(0)
  const [overlayHeight, setOverlayHeight] = useState(0)
  
  const [isCameraVisible, setIsCameraVisible] = useState(false)
  const [cameraSize, setCameraSize] = useState(0)
  const [cameraX, setCameraX] = useState(0)
  const [cameraY, setCameraY] = useState(0)

  const onSync = () => {
    // copy the current settings data 
    if(settingsData){
      settingsData.map(data => {
        switch(data.settingsFor) {
          case 'camera': 
            setIsCameraVisible(data.values.isVisible)
            setCameraSize(data.values.size)
            setCameraX(data.values.x)
            setCameraY(data.values.y)
            break;
          case 'overlay':
            setOverlayWidth(data.values.width)
            setOverlayHeight(data.values.height)
            break;
          default: console.log('Settings for unknown component found')
        }
      })
    } else {
      console.log('Could not get settings from the server.')
    }
  }

  const onUpdate = () => {
    // send current settings to the server
    fetch('/api/settings', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify([
        { 
          settingsFor: 'overlay',
          values: {
            width: Number(overlayWidth),
            height: Number(overlayHeight)
          }
        },
        {
          settingsFor: 'camera',
          values: {
            isVisible: isCameraVisible,
            size: Number(cameraSize),
            x: Number(cameraX),
            y: Number(cameraY)
          }
        }
      ])
    }).then(value => {
      if(value.status === 200) {

      }
    })
  }

  return (
    <div>
      <div>
        <button className='btn btn-primary mr-1 mb-1' onClick={onSync} >Sync</button>
        <button className='btn btn-warning mr-1 mb-1' onClick={onUpdate} >Update</button>
      </div>
      <div className='row w-100'>
        <div className='col'>
          <strong>Settings</strong>
          <OverlaySettings 
            width={overlayWidth} 
            height={overlayHeight} 
            onWidthChange={setOverlayWidth} 
            onHeightChange={setOverlayHeight} />
          <CameraSettings 
            isVisible={isCameraVisible} 
            size={cameraSize} 
            x={cameraX} 
            y={cameraY} 
            onIsVisibleChange={setIsCameraVisible}
            onSizeChange={setCameraSize} 
            onXChange={setCameraX} 
            onYChange={setCameraY} />
        </div>
        <div className='col'>
          <strong>Ouput</strong>
          <Output 
            overlayWidth={overlayWidth} 
            overlayHeight={overlayHeight}
            isCameraVisible={isCameraVisible}
            cameraSize={cameraSize}
            cameraX={cameraX}
            cameraY={cameraY} />
        </div>
      </div>
    </div>
  );
};

export default Settings;