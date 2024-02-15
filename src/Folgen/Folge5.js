import React from 'react'
import branditEpisode1 from '../assets/brandit_banner_folge5.jpg'
import '../styles/PodcastFolgen.css'

function Folge5() {
  return (
  <div className='elementFolgen'>
    <div className='logoHeader'>
    <img src={branditEpisode1} /></div>
    <h1 className='folgenHead'>Farbpsychologie im Branding</h1>
    <p className='subHead'><em>brandit. Folge 5</em></p>
    <div className='folgenLinks'>
    <a href='https://open.spotify.com/episode/15zz1SFXbwQyMVPy4QdsvH?si=c383f2b3108c47b5' target="_blank">
      <i className='fa-brands fa-spotify'></i>
    </a>
    <a href='https://podcasts.apple.com/de/podcast/brandit/id1724738282?i=1000644190879' target="_blank">
      <i class="fab fa-itunes"></i>
    </a>
    <a href='https://youtu.be/0AXconl1jSE' target="_blank">
      <i className='fa-brands fa-youtube'></i>
    </a>
    </div>  
    <p className='subText'>
    Hallo und herzlich willkommen zur 5. Folge von brandit. - dem Brandingpodcast! 
    Heute reden wir über Farben im Branding. Warum entscheiden sich bestimmte Branchen für bestimmte Farben? Warum sind Baumärkte oft in Orange oder Rot gehalten?
    <br />
    <br />
    Die Farbpsychologie spielt eine entscheidende Rolle bei der Markenidentität. Farben können Emotionen, Assoziationen und sogar Verhaltensweisen beeinflussen. Orange und Rot, die oft in Baumärkten zu finden sind, können eine dynamische Atmosphäre schaffen, die mit Aktivität und Kreativität in Verbindung gebracht wird. Doch warum?
    <br />
    <br />
    Ein blau-weißes Design, das in vielen Marken weltweit zu finden ist, vermittelt oft Vertrauen, Professionalität und Seriosität. Viele Finanzinstitute und Technologieunternehmen bevorzugen diese Farben, um ein Gefühl von Stabilität und Zuverlässigkeit zu vermitteln.
    <br />
    <br />
    Doch Vorsicht ist geboten, wenn es um internationales Branding geht. Farben können in verschiedenen Kulturen unterschiedliche Bedeutungen haben. Daher ist es wichtig, sich über kulturelle Nuancen bewusst zu sein, um Fettnäpfchen zu vermeiden.
    <br />
    <br />
    Und ja, es gibt tatsächlich einen blauen McDonald's! 
    <br />
    <br />
    Das war ein kleiner Einblick in die spannende 5. Folge von brandit. in der wir über die Welt der Farbpsychologie im Branding reden. 
    <br />
    <br />
    <em>brandit.</em> – Der Brandingpodcast produziert von <a className='greyMountains' href='https://www.greymountains.de' target="_blank"><strong>Grey Mountains Media</strong></a>.
    <br />
    </p>
    <button className='backEpisode'><a href='/episoden'>Zurück zur Übersicht</a></button>
  </div>
  )
}

export default Folge5