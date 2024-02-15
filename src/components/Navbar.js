// import React, { useState } from 'react';
// import Logo from '../assets/logo_brandit.png';
// import { Link } from 'react-router-dom';
// import ReorderIcon from '@mui/icons-material/Reorder';
// import '../styles/Navbar.css';

// function Navbar() {

//   const [openLinks, setOpenLinks] = useState(false);

//   const toggleNavbar = () => {
//       setOpenLinks(!openLinks);
//   }

//   return (
//     <div className="navbar">
//       <div className="leftSide" id={openLinks ? "open" : "close"}>
//         <Link to="/"><img src={Logo} alt="brandit. Logo Orange" /></Link>
//         <div className='hiddenLinks'>
//         <Link to="/">Home</Link>
//         <Link to="/Episoden">Episoden</Link>
//         <Link to="/newsletter">Newsletter</Link>
//         </div>
//       </div>
//       <div className="rightSide">
//         <Link to="/" className='link'>Home</Link>
//         <Link to="/Episoden" className='link'>Episoden</Link>
//         <Link to="/newsletter" className='link'>Newsletter</Link>
//         <button onClick={toggleNavbar}>
//         <ReorderIcon />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Navbar;


import { Component } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems'
// import Logo from '../assets/logo_brandit.png';
import React from 'react'

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  render() {
  return (
    <div>
      <nav className='navbarItems'>
       {/* <Link className='navbarLogo' to="/"><img src={Logo} alt="brandit. Logo Orange"  /></Link> */}
        <h1 className='navbarLogo'><a href='/'>brandit.</a></h1>
        <div className='menuIcons' onClick= {this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
        </div>
        <ul className={this.state.clicked ? 'navbarMenu active' : 'navbarMenu'}>
        {MenuItems.map((item, index) => {
            return (
                <li key={index}>
                <Link to={item.url} className={item.cName}>{item.title}</Link>
                </li>
            )
        })}
        </ul>
      </nav>
    </div>
  )
}}

export default Navbar
