import React from 'react'
import '../styles/About.css'
import AboutData from './AboutData'
import podMic from '../assets/RodeMic.jpg'
import AudioSetup from '../assets/RodeCaster.jpg'

const About =() => {
  return (
    <div className='about'>
    <h1>Was ist brandit.?</h1>
      <p>Natürlich ein Podcast, aber was noch?</p>

      <AboutData
      className="firstAbout"
      heading="Brand it!"
      text="Bei brandit. - dem Branding Video Podcast, sprechen wir wöchentlich über ein neues Thema, wie beispielsweise die Kraft von Storytelling, 
        die Macht eines einprägsamen Logos oder die Geheimnisse erfolgreicher Marketingkampagnen – alles aus der Welt des Brandings."
      text2="Dabei geht es nicht nur um theoretisches Wissen, sondern auch um praxiserprobte Strategien, inspirierende Geschichten und bewährte Methoden, die am Ende den Unterschied 
        zwischen einer durchschnittlichen und einer herausragenden Brand ausmachen."
        img1={podMic}
        img2={AudioSetup}
       />

      <AboutData
      className="firstAboutReverse"
      heading=<em>"Branding ist mehr als nur ein schickes Logo oder Design!"</em>
      text="Es gibt einen Grund, warum manche Marken im Gedächtnis bleiben, während andere in der Masse untergehen. Und dieser Grund lautet Branding. 
        Branding ist weit mehr als nur ein Logo oder ein schickes Design – es ist die Seele einer Marke, die Geschichte, die sie erzählt, und die Verbindung, die sie zu ihrer Zielgruppe aufbaut."
      text2="Branding ist für uns nicht nur ein Konzept, sondern ein umfassender Prozess, der Marken zum Leben erweckt. Von der Entwicklung einer einzigartigen Markenpersönlichkeit bis hin zur wirksamen 
        Umsetzung von Marketingstrategien zählt dabei Detail."
        img1={podMic}
        img2={AudioSetup}
       />

    </div>
  )
}

export default About

