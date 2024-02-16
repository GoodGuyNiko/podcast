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
