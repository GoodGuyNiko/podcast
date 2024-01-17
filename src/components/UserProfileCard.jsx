import React from 'react'
import '../styles/UserProfile.css'
import profileIcon from '../assets/Svenja.jpg'

const UserProfileCard = () => {
  return (
    <div className='upc'>
      <div className='gradiant'></div>
      <div className='profileDown'>
        <img src={profileIcon} alt='' />
        <div className='profileTitle'>Svenja Schweres</div>
        <div className='profileDescription'>
        Bacon ipsum dolor amet pancetta prosciutto filet mignon, sausage pork belly 
        spare ribs doner. Kevin alcatra tail tenderloin bresaola, sausage hamburger 
        ribeye tongue salami andouille short ribs turducken flank ham hock. 
        Cupim bacon spare ribs andouille, doner kevin landjaeger.
        </div>
        <div className='profileButton'><a href='mailto:niko.schweres@greymountains.de'>Contact</a></div>
      </div>
    </div>
  )
}

export default UserProfileCard
