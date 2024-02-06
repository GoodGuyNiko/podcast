import React from 'react'
import '../styles/UserProfile.css'
import SvenjaIcon from '../assets/Svenja_Schweres_brandit.jpg'
import NikoIcon from '../assets/Niko_Schweres_brandit.jpg'

const UserProfileCard = () => {
  return (
    <div className='upc'>
      <div className='gradiant'></div>
      <div className='profileDown'>
        <img src={SvenjaIcon} alt='Foto Svenja Schweres brandit.' />
        <div className='profileTitle'>Svenja Schweres</div>
        <div className='profileDescription'>
        Bacon ipsum dolor amet pancetta prosciutto filet mignon, sausage pork belly 
        spare ribs doner. Kevin alcatra tail tenderloin bresaola, sausage hamburger 
        ribeye tongue salami andouille short ribs turducken flank ham hock. 
        Cupim bacon spare ribs andouille, doner kevin landjaeger.
        </div>
        <div className='profileButton'><a href='mailto:svenja.kircher@greymountains.de'>Kontakt</a></div>
      </div>
      <div className='gradiant'></div>
      <div className='profileDown'>
        <img src={NikoIcon} alt='Foto Niko Schweres brandit.' />
        <div className='profileTitle'>Niko Schweres</div>
        <div className='profileDescription'>
        Bacon ipsum dolor amet pancetta prosciutto filet mignon, sausage pork belly 
        spare ribs doner. Kevin alcatra tail tenderloin bresaola, sausage hamburger 
        ribeye tongue salami andouille short ribs turducken flank ham hock. 
        Cupim bacon spare ribs andouille, doner kevin landjaeger.
        </div>
        <div className='profileButton'><a href='mailto:niko.schweres@greymountains.de'>Kontakt</a></div>
      </div>
    </div>
    
  )
}

export default UserProfileCard
