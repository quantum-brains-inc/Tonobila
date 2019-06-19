import React from 'react'
import './article.css'
import image from '../../images/toyota.jpg'
import Actuality from '../actuality'

const Articles6 = ()=> {
    return ( 
        <div className="background-container">
            <div className="article-container">
                <div  className='div1'>
                <h1>La Toyota Corolla S arrive en concession</h1>
                <div className="yellow-line">
                </div>
                <p>La nouvelle Toyota Corolla est arrivée avec une technologie hybride et un design plus agressif que celui de sa devancière, l’Auris. </p>
                <img src={image} className="imagecar"/>
                <p>On ne peut pas l’oublier, Corolla a un historique assez long, son histoire remonte à la fin des années soixante avec la version E10. Toyota avait à cette époque une politique assez simple, offrir une voiture familiale, et qu’elle soit la plus économique possible, tout comme Honda. Elle se base toujours sur ça même au 21e siècle, en développant une nouvelle formule qui va plutôt avec l’hybride, et ce, pour satisfaire ceux qui veulent une voiture aux coûts d’usage réduits (entretien simplifié, consommation plus faible, longévité mécanique).</p>
                <p>Le seul bémol était que sa devancière, l’Auris, manquait un peu de style  (Cela n’a pas empêché qu’elle réalise l’une des meilleures ventes mondiales automobiles). Toyota semble avoir compris ça, et a adopté cette fois un style très agressif et inédit pour la marque japonaise.</p>
                <p>Côté motorisation, elle est disponible uniquement en hybride et un nouveau 2.0 180 ch électrifié.</p>
                </div>
                <div className='div2'>
                    <p>Ads</p>
                </div>
            </div>
            <Actuality/>
        </div>

    )
  }
export default Articles6;