import React from 'react'
import Logo from '../assets/KTN_Logo1.png'
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'></div>
        <img src={Logo} alt="KitchenNest Logo"/>
        <div className='rightSide'></div>
            <Link to="/"> Home </Link>
            <Link to="/"> About </Link>
            <Link to="/"> Recipes </Link>
            <Link to="/"> SignUp </Link>
            
      
    </div>
  )
}

export default Navbar
