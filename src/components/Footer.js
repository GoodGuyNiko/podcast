import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MicIcon from '@mui/icons-material/Mic'
import '../styles/Footer.css'


function Footer() {

var year = new Date().getFullYear()

  return (
    <div className="footer">
      <div className='socialMedia'>
        <InstagramIcon />
        <YouTubeIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <MicIcon />
      </div>
      <p>&copy; {year} <a href='https://www.greymountains.de' className='greyMountains'>Grey Mountains Media</a></p>
    </div>
  )
}

export default Footer
