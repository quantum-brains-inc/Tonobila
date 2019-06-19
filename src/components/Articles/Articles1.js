import React from 'react'
import './article.css'
import image from '../../images/golf8.jpg'
import Actuality from '../actuality'

const Articles1 = ()=> {
    return ( 
        <div className="background-container">
            <div className="article-container">
                <div  className='div1'>
                <h1>Finalement, Volkswagen devrait livrer les premières Golf 8 en fin d'année</h1>
                <div className="yellow-line">
                </div>
                <p> Volkswagen va mettre les petits plats dans les grands à l 'occasion de la présentation de la nouvelle Golf, qui ne se fera pas au salon de Francfort. C'
                eut été pourtant l 'endroit et le moment idéal pour le faire, à domicile, et à quelques mois du lancement, mais la marque préfère laisser de la place à la nouvelle compacte électrique I.D. Et puis, ce sera surtout l'
                occasion d 'organiser un évènement spécialement dédié à la Golf, en octobre.
                Et si les premières livraisons avaient été repoussées à fin février après des soucis de mise au point, Herbert Diess, le patron du groupe Volkswagen, a confirmé que la marque avait pu refaire son retard et que les premiers clients seront livrés d 'ici la fin d'
                année.Ce qui, il faut l 'avouer, vient un peu contredire les déclarations faites par Jürgen Stackmann, le chef des ventes de Volkswagen, qui ne semblait pas voir d'
                un bon oeil un lancement en décembre, où la Golf pourrait être "éclipsée"
                par la magie de Noël.
                </p>
                <img src={image} className="imagecar"/>
                <p> Qu 'importe, Volkswagen semble bien parti pour mettre sur la route les premières Golf 8 d'
                ici novembre / décembre.Une période durant laquelle nous devrions également découvrir la nouvelle Audi A3 et la Seat Leon.</p>
                
                </div>
                <div  className='div2'>
                    <p>Ads</p>
                </div>
            </div>
            <Actuality/>
        </div>

    )
  }
export default Articles1;