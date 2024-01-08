import React from 'react'
import '../styles/Spotify.css'

function Spotify() {
  return (
    <div className='spotifyPlayer'>
        <iframe className='spotify' src="https://open.spotify.com/embed/show/3JYc6CejghMVvFXCrzZne8/video?utm_source=generator" title='brandit. Show' allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  )
}

export default Spotify
