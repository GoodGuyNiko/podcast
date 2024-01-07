import React from 'react'
import branditMic from '../assets/brandit_podcast_mic.png'
import '../styles/Landing2.css'

function Landing2() {
  return (
    <div className='orangeContainer'>
    <div className='containerOne'>
        <div className='headlineOne'>
            <h1 className='headlineContent'>Über brandit.</h1>
        </div> 
        <div className='microphone'>
            <img className='micImage' src= {branditMic} alt='Brandit Microphone' />
        </div>
    </div>
    <div className='containerTwo'>
        <div className='paragraphOne'>
        Bei brandit. - dem Branding Podcast, sprechen wir wöchentlich über ein neues Thema, wie beispielsweise die Kraft von Storytelling, 
        die Macht eines einprägsamen Logos oder die Geheimnisse erfolgreicher Marketingkampagnen – alles aus der Welt des Brandings. 
        </div>
        <div className='paragraphTwo'>
        Dabei geht es nicht nur um theoretisches Wissen, sondern auch um praxiserprobte Strategien, inspirierende Geschichten und bewährte Methoden, die am Ende den Unterschied 
        zwischen einer durchschnittlichen und einer herausragenden Brand ausmachen. 
        </div>
    </div>
    </div>
  )
}

export default Landing2
