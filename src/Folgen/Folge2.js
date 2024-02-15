import React from 'react'
import branditEpisode1 from '../assets/brandit_banner_folge2.jpg'
import '../styles/PodcastFolgen.css'

function Folge2() {
  return (
  <div className='elementFolgen'>
    <div className='logoHeader'>
    <img src={branditEpisode1} /></div>
    <h1 className='folgenHead'>Wie finde ich den richtigen Namen für mein Brand?</h1>
    <p className='subHead'><em>brandit. Folge 2</em></p>
    <div className='folgenLinks'>
    <a href='https://open.spotify.com/episode/3gfNQpeHbH2f3TTMAWEpIv?si=a16d9bcf8b1a4e26' target="_blank">
      <i className='fa-brands fa-spotify'></i>
    </a>
    <a href='https://podcasts.apple.com/de/podcast/brandit/id1724738282?i=1000640900479' target="_blank">
      <i class="fab fa-itunes"></i>
    </a>
    <a href='https://youtu.be/ALAAXWHKC_4' target="_blank">
      <i className='fa-brands fa-youtube'></i>
    </a>
    </div>  
    <p className='subText'>
    Herzlich willkommen zur zweiten Folge von brandit.! 
    In dieser Episode tauchen wir tief in die Welt des Brandings ein und erkunden zu allererst, was genau eigentlich Branding ist und warum es mehr ist als nur ein schickes Logo. 
    <br/>
    <br/>
    Branding goes Beyond the Logo:
    Wir bei brandit. betrachten Branding als einen umfassenden Prozess, der darauf abzielt, eine einzigartige Markenidentität zu schaffen, Vertrauen beim Kunden aufzubauen und eine starke Bindung zwischen Unternehmen und Zielgruppe zu etablieren. In dieser Folge erfahrt ihr, warum die Identität eurer Marke über das Hervorheben von äußeren Merkmalen hinausgeht und welche Schlüsselelemente einen bleibenden Eindruck bei eurer Zielgruppe hinterlassen.
    <br/>
    <br/>
    Begleitet uns auf dieser spannenden Reise durch die Welt des Brandings und lasst uns gemeinsam entdecken, wie ihr eure Marke nicht nur sichtbar, sondern auch unverwechselbar macht. Denn Branding ist Kunst und Strategie in einem und hilft euch dabei, eure Marke zu formen und langfristig erfolgreich zu machen. Viel Spaß bei der zweiten Folge von brandit.!
    <br/>
    <em>brandit.</em> – Der Brandingpodcast produziert von <a className='greyMountains' href='https://www.greymountains.de' target="_blank"><strong>Grey Mountains Media</strong></a>.
    </p>
    <button className='backEpisode'><a href='/episoden'>Zurück zur Übersicht</a></button>
  </div>
  )
}

export default Folge2
