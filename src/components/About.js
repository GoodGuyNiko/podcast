import React from 'react'
import '../styles/About.css'
import AboutData from './AboutData'
import podMic from '../assets/Mic_Placeholder.png'
import AudioSetup from '../assets/Rodecaster_placeholder.png'

const About =() => {
  return (
    <div className='about'>
    <h1>Was ist brandit.?</h1>
      <p>Natürlich ein Podcast, aber was noch?</p>

      <AboutData
      heading="Brand it!"
      text="Bei brandit. - dem Branding Video Podcast, sprechen wir wöchentlich über ein neues Thema, wie beispielsweise die Kraft von Storytelling, 
        die Macht eines einprägsamen Logos oder die Geheimnisse erfolgreicher Marketingkampagnen – alles aus der Welt des Brandings."
      text2="Dabei geht es nicht nur um theoretisches Wissen, sondern auch um praxiserprobte Strategien, inspirierende Geschichten und bewährte Methoden, die am Ende den Unterschied 
        zwischen einer durchschnittlichen und einer herausragenden Brand ausmachen."
        img1={podMic}
        img2={AudioSetup}
       />

    </div>
  )
}

export default About

