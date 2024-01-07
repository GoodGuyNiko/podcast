import React, { useState } from 'react';
import Logo from '../assets/logo_brandit.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
      setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/"><img src={Logo} alt="brandit. Logo Orange" /></Link>
        <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/Episoden">Episoden</Link>
        <Link to="/newsletter">Newsletter</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/Episoden">Episoden</Link>
        <Link to="/newsletter">Newsletter</Link>
        <button onClick={toggleNavbar}>
        <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar;
