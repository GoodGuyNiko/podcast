import React from 'react'
import '../styles/About.css'
import AboutData from './AboutData'
import podMic from '../assets/brandit_podcast_mic.png'

const About =() => {
  return (
    <div className='about'>
    <h1>Was ist brandit.?</h1>
      <p>Bei brandit. - dem Branding Podcast, sprechen wir wöchentlich über ein neues Thema, wie beispielsweise die Kraft von Storytelling, 
        die Macht eines einprägsamen Logos oder die Geheimnisse erfolgreicher Marketingkampagnen – alles aus der Welt des Brandings. </p>

      <AboutData
      heading="Placeholder"
      text="Dabei geht es nicht nur um theoretisches Wissen, sondern auch um praxiserprobte Strategien, inspirierende Geschichten und bewährte Methoden, die am Ende den Unterschied 
        zwischen einer durchschnittlichen und einer herausragenden Brand ausmachen."
        img1={podMic}
        // img2={rodeCaster}
       />

    </div>
  )
}

export default About

