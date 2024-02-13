import React from 'react'
import '../styles/UserProfile.css'
import UserProfileCard from './UserProfileCard'
import Niko from '../assets/Niko_Schweres.jpg'
import Svenja from '../assets/Svenja_Schweres.jpg'


function UserProfile() {
  return (
    <div className='user'>
    <h1>Die Podcast Hosts</h1>
    <p>Wer steckt hinter brandit. dem Branding Podcast?</p>
    <div className='userCard'>
      <UserProfileCard
      image={Niko}
      heading="Niko Schweres"
      text= "Niko Schweres begann 2006 seine Karriere als Kameramann. Seitdem arbeitete er an mehr als 1000 Reportagen für das deutsche Fernsehen. Im Jahr 2011 wurde er Co-Geschäftsführer bei telefacts.tv. 2023 gründete gemeinsam mit Svenja Schweres zusammen Grey Mountains. Mit ihrer Firma helfen sie Unternehmen auf dem Weg nach oben."
      button= <a href='https://www.instagram.com/nikoschweres/' target="_blank">
      <i className='fa-brands fa-instagram'></i></a>
      />
      <UserProfileCard
      image={Svenja}
      heading="Svenja Schweres"
      text= "Svenja Schweres ist eine erfahrene Videoproduzentin und Mitgründerin von Grey Mountains Media. Als Branding-Expertin bringt sie umfassende Kenntnisse in die Entwicklung und Vermarktung von Marken ein. Zusätzlich moderiert sie den Branding-Podcast brandit., der Einblicke und Tipps für eine erfolgreiche Markenbildung bietet."
      button=<a href='https://www.instagram.com/svenjakircher/' target="_blank">
      <i className='fa-brands fa-instagram'></i></a>
      />
    </div>
    </div>
  )
}

export default UserProfile