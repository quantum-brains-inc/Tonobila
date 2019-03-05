import React from 'react'
import './header-home.css'

const Header = () => {
    return(
        <div className="header">
            <div className="header-card">
                <div className="header-card-text">
                    <h2>déposez votre annonce</h2>
                    <div className="line"></div>
                    <p>Dépot d’annonces gratuit pour vendre tout type de voiture au maroc.</p>
                </div>
                <button>+</button>
            </div>
            <div className='respo-Annonce'>DÉPOSEZ VOTRE ANNONCE</div>
        </div>
    )
}
export default Header