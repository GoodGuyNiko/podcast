import React from 'react'
import branditEpisode1 from '../assets/brandit_banner_folge3.jpg'
import '../styles/PodcastFolgen.css'

function Folge3() {
  return (
  <div className='elementFolgen'>
    <div className='logoHeader'>
    <img src={branditEpisode1} /></div>
    <h1 className='folgenHead'>Brand Building durch Videopodcast</h1>
    <p className='subHead'><em>brandit. Folge 3</em></p>
    <div className='folgenLinks'>
    <a href='https://open.spotify.com/episode/6NW3FI79WrMFT6bkkGSuzK?si=705710941f1f44fe' target="_blank">
      <i className='fa-brands fa-spotify'></i>
    </a>
    <a href='https://podcasts.apple.com/de/podcast/brandit/id1724738282?i=1000642474121' target="_blank">
      <i class="fab fa-itunes"></i>
    </a>
    <a href='https://www.youtube.com/watch?v=5Oz-THGklTc' target="_blank">
      <i className='fa-brands fa-youtube'></i>
    </a>
    </div>  
    <p className='subText'>
    „Brief von svenja“
    <br />
    <br />
    Herzlich willkommen zur dritten Folge von brandit.!
    <br />
    <br />
    In dieser Folge sprechen wir darüber, wie Brand Building durch Videopodcasts funktioniert und was dabei zu beachten ist. Ich persönlich liebe Podcasts. Ich höre sie, wenn ich draußen spazieren gehe, beim Sport bin oder mich um den Abwasch kümmere. Am liebsten höre ich dabei Infotainment-Podcasts. Ich liebe es, mich weiterzubilden und neue Dinge zu lernen, und das gelingt mir besonders gut mit Podcasts. Ich informiere mich über die richtige Ernährung, die Vorteile von Coldplunging, sogar Fußballpodcasts höre ich mir an, damit ich vor meinem Mann mit meinem Bundesliga-Wissen angeben kann. Das macht mir unglaublich viel Spaß. So wird aus der Zeit, in der ich die Wäsche falte und wegräume, direkt eine richtige Lernstunde.
    <br /> 
    <br /> 
    Und viele Menschen ticken genauso wie ich. Also, warum nicht dieses Interesse nutzen, um die eigene Marke zu stärken? Du hast ein Finanzberatungsunternehmen und möchtest dich besser vermarkten? Dann ist es eine großartige Idee, dein Wissen zu teilen. So positionierst du dich als Experte, und die Menschen lernen dich kennen. Deine Persönlichkeit, deine Tonlage, dein Humor – das sind Alleinstellungsmerkmale, die dich und dein Unternehmen einzigartig machen. Du kommst zwar aus der Finanzbranche, identifizierst dich aber überhaupt nicht mit dem staubigen Image, das damit einhergeht. Du bist jung und lustig und liebst deinen Job, weil du für das Thema brennst? Dann nutze deine Persönlichkeit, um die Außendarstellung deiner Marke zu prägen.
    <br />
    <br />
    Wie man das Ganze Schritt für Schritt angeht? Das erklären wir dir in der neuen Folge von brandit. – dem Branding Podcast.(Svenja Schweres)
    <br />
    <em>brandit.</em> – Der Brandingpodcast produziert von <a className='greyMountains' href='https://www.greymountains.de' target="_blank"><strong>Grey Mountains Media</strong></a>.
    </p>
    <button className='backEpisode'><a href='/episoden'>Zurück zur Übersicht</a></button>
  </div>
  )
}

export default Folge3
