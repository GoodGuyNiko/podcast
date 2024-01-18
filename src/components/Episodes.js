import React from 'react'
import '../styles/Episodes.css'
import EpisodesData from './EpisodesData'
import branditEpisode1 from '../assets/brandit_episode1.png'
import branditEpisode2 from '../assets/brandit_episode2.png'


function Episodes() {
  return (
    <div className='episode'>
    <h1>Episode 1</h1>
    <p>In Episode 1 blah blah blah blah</p>
    <div className='episodeCard'>
      <EpisodesData
      image={branditEpisode1}
      heading="Episode 1"
      text= "In Episode 1..."
      />
            <EpisodesData
      image={branditEpisode2}
      heading="Episode 2"
      text= "In Episode 2..."
      />
    </div>
    </div>
  )
}

export default Episodes
