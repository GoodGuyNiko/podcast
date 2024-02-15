import React from 'react'
import branditEpisode1 from '../assets/brandit_banner_folge6.jpg'
import '../styles/PodcastFolgen.css'

function Folge6() {
  return (
  <div className='elementFolgen'>
    <div className='logoHeader'>
    <img src={branditEpisode1} /></div>
    <h1 className='folgenHead'>Wann lohnt sich ein Rebranding?</h1>
    <p className='subHead'><em>brandit. Folge 6</em></p>
    <div className='folgenLinks'>
    <a href='https://open.spotify.com/episode/4p1ZzyqPwMSUfbDfwQxE5b?si=e0e92abeac1947f0' target="_blank">
      <i className='fa-brands fa-spotify'></i>
    </a>
    <a href='https://podcasts.apple.com/de/podcast/brandit/id1724738282?i=1000645015002' target="_blank">
      <i class="fab fa-itunes"></i>
    </a>
    <a href='https://youtu.be/LXT288sludA' target="_blank">
      <i className='fa-brands fa-youtube'></i>
    </a>
    </div>  
    <p className='subText'>
    Hallo, Svenja hier. Ich möchte euch kurz einen Überblick über unsere Folge 6 von brandit. – dem Brandingpodcast geben. Das Thema diese Woche ist Rebranding. 
    <br />
    <br />
    Wann lohnt es sich, über ein Rebranding nachzudenken? Welche Fragen muss ich beantworten können, bevor ich mich aktiv an das Rebranding meiner Marke mache? Und wie gehe ich dabei eigentlich schrittweise vor? 
    Wir geben euch nicht nur alle Informationen, die ihr benötigt, um selbst abzuschätzen, ob sich ein Rebranding für euch lohnt. Wir teilen auch effektive Tipps und Tricks, wie ihr das Ganze angehen solltet, und besprechen in dieser Folge von brandit. gemeinsam anhand eines Fallbeispiels wie wir das Ganze Schritt für Schritt angehen würden.
    <br />
    <br />
    <em>brandit.</em> – Der Brandingpodcast produziert von <a className='greyMountains' href='https://www.greymountains.de' target="_blank"><strong>Grey Mountains Media</strong></a>.
    <br />
    </p>
    <button className='backEpisode'><a href='/episoden'>Zurück zur Übersicht</a></button>
  </div>
  )
}

export default Folge6