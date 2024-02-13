import React from 'react'
import '../styles/Episodes.css'
import EpisodesData from './EpisodesData'
import branditEpisode1 from '../assets/brandit_folge1.png'
import branditEpisode2 from '../assets/brandit_folge2.png'
import branditEpisode3 from '../assets/brandit_folge3.png'
import branditEpisode4 from '../assets/brandit_folge4.jpg'
import branditEpisode5 from '../assets/brandit_folge5.jpg'
import branditEpisode6 from '../assets/brandit_folge6.jpg'


function Episodes() {
  return (
    <div className='episode'>
    <h1>brandit. Podcast</h1>
    <p>Übersicht aller unserer Folgen</p>
    <div className='episodeCard'>
      <EpisodesData
      image={branditEpisode1}
      heading="Der richtige Name für mein Brand"
      text= "Ein gut gewählter Name ist mehr als eine Bezeichnung; er ist das repräsentative Aushängeschild der Marke. Im Podcast erklären wir, worauf es bei der Namenswahl ankommt: Einzigartigkeit, Einfachheit und klare Verbindung zum Produkt. Unsere Mission ist ..."
      button= <a href='/branditfolge1'>Mehr</a>
      />
      <EpisodesData
      image={branditEpisode2}
      heading="Was genau ist eigentlich Branding?"
      text= "In dieser Folge erfahrt ihr, warum die Identität eurer Marke über das Hervorheben von äußeren Merkmalen hinausgeht und welche Schlüsselelemente einen bleibenden Eindruck bei eurer Zielgruppe hinterlassen. Viel Spaß bei der zweiten Folge von brandit.!"
      button= <a href='/branditfolge2'>Mehr</a>
      />
      <EpisodesData
      image={branditEpisode3}
      heading="Brand Building durch Videopodcast"
      text= "In dieser Folge sprechen wir darüber, wie du durch Videopodcasts dein Brand Building vorantreiben kannst. Videopodcasts bieten ein unglaubliches Potenzial, wenn es darum geht, deine Marke zu stärken. Mit deinen Assets wie Persönlichkeit schaffst ..."
      button= <a href='/branditfolge2'>Mehr</a>
      />      
    </div>
    <div className='episodeCard'>
      <EpisodesData
      image={branditEpisode4}
      heading="Die Marketingstrategie von Red Bull"
      text= "In dieser Folge von brandit. nehmen wir uns ein aufschlussreiches Fallbeispiel vor: Wie man die Markenidentität betont, ohne das Produkt aggressiv zu bewerben. Ein Musterbeispiel hierfür ist Red Bull, dessen Instagram-Feed ganz ohne die übliche Dose auskommt."
      button= <a href='/branditfolge1'>Mehr</a>
      />
      <EpisodesData
      image={branditEpisode5}
      heading="Die Farbpsychologie im Branding"
      text= "Farben können Emotionen, Assoziationen und sogar Verhaltensweisen beeinflussen. Orange und Rot, die oft in Baumärkten zu finden sind, können eine dynamische Atmosphäre schaffen, die mit Aktivität und Kreativität in Verbindung gebracht wird. Doch warum?"
      button= <a href='/branditfolge2'>Mehr</a>
      />
      <EpisodesData
      image={branditEpisode6}
      heading="Was genau ist eigentlich Branding?"
      text= "In dieser Folge erfahrt ihr, warum die Identität eurer Marke über das Hervorheben von äußeren Merkmalen hinausgeht und welche Schlüsselelemente einen bleibenden Eindruck bei eurer Zielgruppe hinterlassen. Viel Spaß bei der zweiten Folge von brandit.!"
      button= <a href='/branditfolge2'>Mehr</a>
      />      
    </div>
    </div>
  )
}

export default Episodes
