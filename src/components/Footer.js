import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MicIcon from '@mui/icons-material/Mic'
import '../styles/Footer.css'
import { Link } from 'react-router-dom';


function Footer() {

var year = new Date().getFullYear()

  return (
    <div className="footer">
      <div className='socialMedia'>
        <Link to='https://www.instagram.com' target="_blank" rel="noopener noreferrer"><InstagramIcon /></Link>
        <Link to='https://www.youtube.com/channel/UCgiXFlW5Oqkwf3To8vF89uw' target="_blank" rel="noopener noreferrer"><YouTubeIcon /></Link>
        <Link to='https://www.x.com' target="_blank" rel="noopener noreferrer"><TwitterIcon /></Link>
        <Link to='https://www.linkedin.com' target="_blank" rel="noopener noreferrer"><LinkedInIcon /></Link>
        <Link to='https://open.spotify.com/show/3JYc6CejghMVvFXCrzZne8' target="_blank" rel="noopener noreferrer"><MicIcon /></Link>
      </div>
      <p>&copy; {year} <a href='https://www.greymountains.de' className='greyMountains'>Grey Mountains Media</a></p>
    </div>
  )
}

export default Footer
