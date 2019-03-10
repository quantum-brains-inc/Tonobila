import React from 'react';
import './Footer.css';


 const Footer = ()=> {
  return (
    <div className='footer'>
      <div className='footer-copyright'>
          <h3>Tonobila.ma<br/><span>&copy; 2019</span> </h3>
      </div>
      <div className='footer-menu'>
          <ul>
              <li>
                  <ul>
                      <li>Accueil</li>
                      <li>Annonces</li>
                      <li>Guid d'achat</li>
                      <li>Contacter nous</li>
                      <li>Blog</li>
                  </ul>
              </li>
              <li>
                  <ul>
                      <li>Condition d'utilisation</li>
                      <li>conditions générales</li>
                      <li>Qui sommes nous</li>
                      <li>Politique de confidentialité</li>      
                  </ul>
              </li>
              <li>
                  <ul>
                      <li>Contacter</li>
                      <li>Inscription</li>
                      <li>Recherche</li>
                      <li>Plan du site</li>
                  </ul>
              </li>
          </ul>

      </div>
      <div className='footer-social'>
          <p>Follow us on social media</p>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-facebook" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
      </div>
    </div>
  )
}

export default Footer;