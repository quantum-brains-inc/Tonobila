import React from 'react'
import './article.css'
import image from '../../images/renault.jpg'
import Actuality from '../actuality'

const Articles5 = ()=> {
    return ( 
        <div className="background-container">
            <div className="article-container">
                <div  className='div1'>
                <h1>5 Étoiles Pour La Renault CLIO 5 À L’Euro NCAP</h1>
                <div className="yellow-line">
                </div>
                <p>Le best-seller du Groupe Renault a été testé par Euro NCAP selon son nouveau protocole </p>
                <img src={image} className="imagecar"/>
                <p>La cinquième génération de l’iconique Clio sera lancée très prochainement et elle se présente d’ores et déjà comme l’une des citadines les plus sûres jamais testées par Euro NCAP. Elle devient le 22ème véhicule du Groupe Renault à recevoir la note maximale de 5 étoiles. Une prouesse obtenue grâce notamment à une sécurité passive renforcée et à une offre d’aides à la conduite la plus complète de la catégorie.</p>
                <p>Nouvelle Clio peut également compter sur une dotation d’équipements de série très riche avec :6 airbags, l’ABS avec aide au freinage d’urgence, une camera et un radar (permettant l’assistant maintien de voie, l’alerte de survitesse avec reconnaissance des panneaux de signalisation, l’alerte de distance de sécurité, le freinage d’urgence), le régulateur/limiteur de vitesse, l’alerte de non bouclage de ceinture (aussi aux places arrière si présence d’occupants), l’appel d’urgence des secours en cas d’accident. Par ailleurs, la vision est optimisée grâce à des projecteurs avant 100% LED de série, l’allumage automatique des feux et un rétroviseur intérieur jour/nuit.</p>
                <p>La nouvelle architecture électronique de Clio permet d’introduire dès l’entrée de gamme, le freinage actif d’urgence avec reconnaissance des piétons, des cyclistes et des autres véhicules, comme en témoigne l’excellente notation (11/12) de l’AEB piéton/cycliste par Euro NCAP. Pour encore plus de sécurité et de confort, Nouvelle Clio démocratisera prochainement des aides évoluées à la conduite avec l’Assistant Trafic et Autoroute, première étape vers la conduite autonome.</p>
                </div>
                <div className='div2'>
                    <p>Ads</p>
                </div>
            </div>
            <Actuality/>
        </div>

    )
  }
export default Articles5;