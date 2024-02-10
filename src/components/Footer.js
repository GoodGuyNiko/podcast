// import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import MicIcon from '@mui/icons-material/Mic'
// import '../styles/Footer.css'
// import { Link } from 'react-router-dom';


// function Footer() {

// var year = new Date().getFullYear()

//   return (
//     <div className="footer">
//       <div className='socialMedia'>
//         <Link to='https://www.instagram.com' target="_blank" rel="noopener noreferrer"><InstagramIcon /></Link>
//         <Link to='https://www.youtube.com/channel/UCgiXFlW5Oqkwf3To8vF89uw' target="_blank" rel="noopener noreferrer"><YouTubeIcon /></Link>
//         <Link to='https://www.x.com' target="_blank" rel="noopener noreferrer"><TwitterIcon /></Link>
//         <Link to='https://www.linkedin.com' target="_blank" rel="noopener noreferrer"><LinkedInIcon /></Link>
//         <Link to='https://open.spotify.com/show/3JYc6CejghMVvFXCrzZne8' target="_blank" rel="noopener noreferrer"><MicIcon /></Link>
//       </div>
//       <p>&copy; {year} <a href='https://www.greymountains.de' className='greyMountains'>Grey Mountains Media</a></p>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>brandit.</h1>
          <p>Der Branding Podcast</p>
        </div>
        <div className='socialMedia'>
          <a href='https://www.instagram.com/brandit.podcast/' target="_blank">
            <i className='fa-brands fa-instagram'></i>
          </a>
          <a href='https://www.youtube.com/@brandit.podcast' target="_blank">
            <i className='fa-brands fa-youtube'></i>
          </a>
          <a href='https://open.spotify.com/show/3JYc6CejghMVvFXCrzZne8?si=1531890553d9411c' target="_blank">
            <i className='fa-brands fa-spotify'></i>
          </a>
          <a href='https://www.tiktok.com'>
            <i className='fa-brands fa-x'></i>
          </a>
          <a href='https://www.tiktok.com'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a href='https://www.tiktok.com'>
            <i className='fa-brands fa-tiktok'></i>
          </a>
       </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>brandit.</h4>
          <a href='/'>Startseite</a>
          <a href='/episoden'>Episoden</a>
          <a href='/hosts'>Hosts</a>
        </div>
        <div>
          <h4>Socials</h4>
          <a href='https://www.instagram.com/brandit.podcast/' target="_blank">Instagram</a>
          <a href=''>TikTok</a>
          <a href=''>LinkedIn</a>
        </div>
        <div>
          <h4>Podcast</h4>
          <a href='https://open.spotify.com/show/3JYc6CejghMVvFXCrzZne8?si=1531890553d9411c' target="_blank">Spotify</a>
          <a href='https://www.youtube.com/@brandit.podcast' target="_blank">Youtube</a>
          <a href=''>X</a>
        </div>
        <div>
          <h4>Kontakt</h4>
          <a href=''>Kontakt</a>
          <a href=''>Impressum</a>
          <a href=''>Datenschutzerklärung</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
