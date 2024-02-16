import React from 'react'
import '../styles/LatestPodcast.css'

function LatestPodcast() {
  return (
    <div className='videoContainer'>
      <h2 className='headline'>Aktuelle Folge</h2>
      <div className='videoWrapper'>
        {/* <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/0AXconl1jSE?si=iK6MWhM7NPDDttrJ" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe> */}
        <iframe src="https://open.spotify.com/embed/episode/4p1ZzyqPwMSUfbDfwQxE5b/video?utm_source=generator" width="560" height="315" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  )
}
export default LatestPodcast
