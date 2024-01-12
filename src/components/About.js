import React from 'react'
import podMic from '../assets/brandit_podcast_mic.png'
import '../styles/About.css'

const About =() => {
  return (
    <div className='about'>
    <h1>Was ist brandit.?</h1>
      <p>Bei brandit. - dem Branding Podcast, sprechen wir wöchentlich über ein neues Thema, wie beispielsweise die Kraft von Storytelling, 
        die Macht eines einprägsamen Logos oder die Geheimnisse erfolgreicher Marketingkampagnen – alles aus der Welt des Brandings. </p>
        <div className='firstAbout'>
            <div className='textAbout'>
            <h2>Placeholder</h2>
            <p>Dabei geht es nicht nur um theoretisches Wissen, sondern auch um praxiserprobte Strategien, inspirierende Geschichten und bewährte Methoden, die am Ende den Unterschied 
        zwischen einer durchschnittlichen und einer herausragenden Brand ausmachen. </p>
        </div>
        <div className='imageAbout'>
            <img alt='brandit. microphone' src={podMic} />
            </div>
        </div>
    </div>
  )
}

export default About

