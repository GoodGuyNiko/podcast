import React from 'react'
import '../styles/LatestPodcast.css'

function LatestPodcast() {
  return (
    <div className='videoContainer'>
      <h2 className='headline'>Aktuelle Folge</h2>
      <div className='videoWrapper'>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/0AXconl1jSE?si=iK6MWhM7NPDDttrJ" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
      </div>
    </div>
  )
}
export default LatestPodcast
