import React from 'react'
import './article.css'
import image from '../../images/hummer.jpg'
import Actuality from '../actuality'

const Articles4 = ()=> {
    return ( 
        <div className="background-container">
            <div className="article-container">
                <div  className='div1'>
                <h1>Le Hummer bientôt de retour en version électrique</h1>
                <div className="yellow-line">
                </div>
                <p>Cela fait presque 10 ans que le Hummer n'est plus commercialisé par le groupe General Motors. </p>
                <img src={image} className="imagecar"/>
                <p>L'entité sait néanmoins que ce baroudeur bénéficie aujourd'hui encore d'une image forte grâce à son exploitation militaire. C'est pourquoi un retour sous la forme d'un équivalent électrique est envisageable selon les communicants du géant américain.</p>
                <p>La nouvelle est tombée lors d'une conférence du groupe concernant le système modulaire du grand pick-up électrique destiné à concurrencer le Ford F-150 survolté à venir. Le président de General Motors Mark Reuss a avoué à nos confrères de Bloomberg que la configuration technique de sa plateforme n'interdit pas l'idée d'un Hummer électrique avant d'ajouter que : "rien n'est sûr mais General Motors pense à tout".</p>
                <p>La plateforme destinée au grand pick-up sera capable d'accueillir deux moteurs électriques. Le modèle ciblera le Ford F-150 mais aussi le Rivian R1T et le futur véhicule à benne du constructeur californien Tesla. D'autres révélations seront faites d'ici 2020.</p>
                </div>
                <div className='div2'>
                    <p>Ads</p>
                </div>
            </div>
            <Actuality/>
        </div>

    )
  }
export default Articles4;