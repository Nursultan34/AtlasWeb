import React from 'react'

const MapWrapper = React.memo (
    () =>{
  return (
    <div id="map-container">
        
    </div>
  )
    },
    () => true,
)

export default MapWrapper