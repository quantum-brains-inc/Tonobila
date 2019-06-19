import React from 'react'
import './about_us.css'
import image_1 from '../../images/simo.png'
import image_2 from '../../images/hafid.png'
import image_3 from '../../images/yacine.png'
import image_4 from '../../images/ibra.png'

export default function About() {
    return (
        <div className="About_us_container">
        <h1>Qui Sommes Nous ?</h1>
            <div className="About_us_pictures">
                <div className="About_us_child">
                    <img src={image_1}/>
                    <p>Echaarani Mohamed</p>
                </div>
                <div className="About_us_child">
                    <img src={image_2} />
                    <p>Bensmail El mahfoud</p>
                </div>
                <div className="About_us_child">
                    <img src={image_3 } />
                    <p>Benzmane Yacine</p>
                </div>
                <div className="About_us_child">
                    <img src={image_4} />
                    <p>Baif Brahim</p>
                </div>
            </div>
            <p>Nous sommes un groupe de 4 jeunes passionnés qui travaillent ensemble pour créer Tonobila.ml. le projet était un rapport de projet de fin d'études après deux ans d'études à l'école eWA, nous avons donc relevé le défi d'utiliser les dernières technologies du marché. </p>
            <p>Avec Tonobila vous pouvez acheter exactement ce que vous voulez tout en obtenant le meilleur prix disponible. Autrement dit nous offrons la possibilité de connecter l'acheteur et le vendeur sans courtiers, de sorte que vous pouvez obtenir le prix d'origine de votre voiture.</p>
        </div>
    )
}
