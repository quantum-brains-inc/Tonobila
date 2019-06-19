import React from 'react'
import './article.css'
import image from '../../images/mercedes.jpg'
import Actuality from '../actuality'



const Articles2 = ()=> {
    return ( 
        <div className="background-container">
            <div className="article-container">
                <div  className='div1'>
                <h1>Mercedes Classe G : nouveau moteur et série spéciale pour les 40 ans</h1>
                <div className="yellow-line">
                </div>
                <p>Pour fêter les 40 ans du Classe G, Mercedes propose la série spéciale "Stronger than time". Elle est déclinée sur trois moteurs, dont l'inédit diesel 400d.</p>
                <img src={image} className="imagecar"/>
                <p>Si l'appellation Classe G est apparue en 1993, le modèle a fait son apparition en 1979. Pour fêter les 40 ans de son franchisseur, Mercedes propose une série spéciale nommée "Stronger than time", un slogan utilisé pour les campagnes de communication de la nouvelle génération, lancée en 2018.
                    Cette version anniversaire reprend le pack esthétique AMG Line, avec notamment les élargisseurs d'ailes et les étriers de frein badgés Mercedes-Benz. Le pack Nuit est de série (feux obscurcis, vitres teintées, rétroviseurs peints en noir). L'inscription "Stronger than time" est projetée au sol sous les rétros et est 
                    visible sur la poignée de maintien face au passager.</p>
                <p>ambiances bicolores,  beige/bleu avec inserts bois de sen marron clair ou beige/rouge avec inserts en laque noir. L'équipement est complet avec en série : phares LED Multibeam, amortissement réglable et adaptatif, caméras panoramiques, éclairage d'ambiance 64 couleurs, instrumentation numérique, sono Surround Burmeister, toit ouvrant en verre…</p>
                <p>Trois moteurs sont au menu, dont un inédit. La série spéciale inaugure en effet la variante G400d. Le nouveau six cylindres en ligne diesel voit sa puissance portée à 330 ch. Le couple maxi est de 700 Nm. Il y a aussi le G500, avec V8 essence de 422 ch.</p>
                <p>Le troisième modèle est le 63 AMG, l'occasion de fêter un autre anniversaire : les 20 ans de la première variante AMG sur le Classe G. Il y a sous le capot un V8 4.0 litres biturbo de 585 ch. Les prix pour la France ne sont pas encore connus.</p>
                </div>
                <div  className='div2'>
                    <p>Ads</p>
                </div>
            </div>
            <Actuality/>
        </div>

    )
  }
export default Articles2;