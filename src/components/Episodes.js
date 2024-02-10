import React from 'react'
import '../styles/Episodes.css'
import EpisodesData from './EpisodesData'
import branditEpisode1 from '../assets/brandit_episode1.png'
import branditEpisode2 from '../assets/brandit_episode2.png'


function Episodes() {
  return (
    <div className='episode'>
    <h1>brandit. Podcast</h1>
    <p>Übersicht aller unserer Folgen</p>
    <div className='episodeCard'>
      <EpisodesData
      image={branditEpisode1}
      heading="Wie finde ich den richtigen Namen für mein Brand?"
      text= "Ein gut gewählter Name ist mehr als eine Bezeichnung; er ist das repräsentative Aushängeschild der Marke. Im Podcast erklären wir, worauf es bei der Namenswahl ankommt: Einzigartigkeit, Einfachheit und klare Verbindung zum Produkt."
      button= <a href='/branditfolge1'>Mehr</a>
      />
      <EpisodesData
      image={branditEpisode2}
      heading="Was genau ist eigentlich Branding?"
      text= "In Episode 2..."
      button= <a href='/branditfolge2'>Mehr</a>
      />
    </div>
    </div>
  )
}

export default Episodes
