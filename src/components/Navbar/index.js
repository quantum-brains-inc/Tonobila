import React from 'react'
import './navbar.css'

const  Navbar = () => {
  return (
    <div className="Navbar">
        <nav>
            <div className="logo"><img src="./images/logo.png" alt="Logo"/></div>
            <div className="menu">
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Annonces</a></li>
                    <li><a href="#">Magazine</a></li>
                    <li><a href="#">Contactez nous</a></li>
                    <li className='sign-in'><a href="#">Sign In</a></li>
                    <li className='sign-up'><a href="#">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar