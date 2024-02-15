import React from 'react'
import branditEpisode1 from '../assets/brandit_banner_folge4.jpg'
import '../styles/PodcastFolgen.css'

function Folge4() {
  return (
  <div className='elementFolgen'>
    <div className='logoHeader'>
    <img src={branditEpisode1} /></div>
    <h1 className='folgenHead'>Die Marketingstrategie von Red Bull</h1>
    <p className='subHead'><em>brandit. Folge 4</em></p>
    <div className='folgenLinks'>
    <a href='https://open.spotify.com/episode/24ZpeQuDDNdJgpXBoaDjer?si=852730efebf344e5' target="_blank">
      <i className='fa-brands fa-spotify'></i>
    </a>
    <a href='https://podcasts.apple.com/de/podcast/brandit/id1724738282?i=1000643285848' target="_blank">
      <i class="fab fa-itunes"></i>
    </a>
    <a href='https://youtu.be/voaTsqCzKpg' target="_blank">
      <i className='fa-brands fa-youtube'></i>
    </a>
    </div>  
    <p className='subText'>
    Willkommen zur vierten Folge von brandit.! Heute nehmen wir uns ein aufschlussreiches Fallbeispiel vor: Wie man die Markenidentität betont, ohne das Produkt aggressiv zu bewerben. Ein Musterbeispiel hierfür ist Red Bull, dessen Instagram-Feed ganz ohne die übliche Dose auskommt. Stattdessen konzentriert sich das Branding auf die Verbreitung der Lebensphilosophie von Red Bull: Abenteuerfreude, Risikobereitschaft, Energie und noch mehr.
    <br />
    <br />
    Erfahrt, wie diese Herangehensweise nicht nur die Zielgruppe anspricht, sondern auch die Bindung zur Marke stärkt. In dieser Episode von brandit. besprechen wir nicht nur, wie Red Bull das Ganze meistert, sondern erklären auch das Warum hinter dieser speziellen Strategie. 
    <br />
    <br />
    <em>brandit.</em> – Der Brandingpodcast produziert von <a className='greyMountains' href='https://www.greymountains.de' target="_blank"><strong>Grey Mountains Media</strong></a>.
    <br />
    </p>
    <button className='backEpisode'><a href='/episoden'>Zurück zur Übersicht</a></button>
  </div>
  )
}

export default Folge4