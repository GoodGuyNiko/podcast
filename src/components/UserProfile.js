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
      text= "Ein gut gewählter Name ist mehr als eine Bezeichnung; er ist das repräsentative Aushängeschild der Marke. Im Podcast erklären wir, worauf es bei der Namenswahl ankommt: Einzigartigkeit, Einfachheit und klare Verbindung zum Produkt."
      // button= <a href='/branditfolge1'>Mehr</a>
      button= <a href='https://www.instagram.com/brandit.podcast/' target="_blank">
      <i className='fa-brands fa-instagram'></i></a>
      />
      <UserProfileCard
      image={Svenja}
      heading="Svenja Schweres"
      text= "In Episode 2..."
      button= <a href='/branditfolge2'>Mehr</a>
      />
    </div>
    </div>
  )
}

export default UserProfile