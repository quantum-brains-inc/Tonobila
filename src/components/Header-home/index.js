import React from 'react'
import './header-home.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className="header-container">
            <div className="header">
                <div className="header-card">
                    <div className="header-card-text">
                        <h2>déposez votre annonce</h2>
                        <div className="line"></div>
                        <p>Dépot d’annonces gratuit pour vendre tout type de voiture au maroc.</p>
                    </div>
                    <Link to="/add"><button id="addPost_home_plus"></button></Link>
                </div>
                <div className='respo-Annonce'>DÉPOSEZ VOTRE ANNONCE</div>
            </div>
        </div>
        
    )
}
export default Header