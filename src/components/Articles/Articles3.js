import React from 'react'
import './article.css'
import image from '../../images/race of morocco.jpg'
import Actuality from '../actuality'

const Articles3 = ()=> {
    return ( 
        <div className="background-container">
            <div className="article-container">
                <div  className='div1'>
                <h1>WTCR Afriquia Race of Morocco 2019 : Le plus grand évènement automobile en Afrique</h1>
                <div className="yellow-line">
                </div>
                <p>Soutenu par le Ministère de la Jeunesse et des Sports, et l’ Office National Marocain du Tourisme(ONMT), l’ événement, unique manche africaine d’ un Mondial automobile, se déroulera également aux couleurs de ses partenaires historiques BMCE Bank of Africa, Wafa Assurance, Renault, et MDJS.</p>
                <img src={image} className="imagecar"/>
                <p>Parmi les nouvelles marques qui débuteront cette année à Marrakech, citons Geely Group qui à travers la structure de Cyan Racing engagera pas moins de 4 voitures ! Développée sur la base de la Volvo S60 Championne du Monde en WTCR (2017), la LynkCo TCR fera ses grands débuts après 8 mois de développement intensif…aux mains d’Yvan Muller. Bien sûr Hyundai remettra son titre constructeur 2018 en jeu avec, excusez du peu, pas moins de 4 modèles i30N officielles dans la structure transalpine BRC. Le Groupe allemand Audi / VW sera tout aussi bien représenté avec 4 Audi RS3 et 4 Volkswagen Golf GTI dont le team de Sébastien Loeb avec Mehdi Bennani. Forte d’une fin de saison très prometteuse avec 1 victoire, Alfa Romeo et son team Mulsanne alignera ses 2 Giulietta avec des ambitions fortement à la hausse.</p>
                <p>L’édition 2019 ne dérogera pas à la tradition, surtout vu le nombre d’engagés qui frôlera la barre des 30 voitures au départ ! Jamais le Championnat du Monde des Voitures de Tourisme n’avait autant suscité d’intérêt de la part des constructeurs. Avec Alfa Romeo, Audi, Honda, Hyundai, Link, Peugeot, Seat et VW pas moins de 8 constructeurs alignent des voitures en 2019 ! Un record. Cet engouement des constructeurs pour le WTCR s’explique par la fabuleuse vitrine qu’offre ce Championnat à travers le Monde ; 4 continents et 10 pays visités. C’est aussi une couverture média et TV équivalente à la Formule 1 grâce à une diffusion en live sur Eurosport à travers 160 pays ! Que rêver de mieux pour les constructeurs comme promotion de leurs gammes auto</p>
                <p>Si le spectacle sur la piste sera digne d’un Championnat du Monde que dire de l’ambiance au sein du Circuit, puisque le paddock vivra samedi et dimanche toutes les émotions du sport et de l’automobile ! Les amateurs de sports mécaniques seront gâtés avec un show de stunt moto signé par le maitre de la spécialité, Julien Welsch qui enflammera le paddock par ses runs de folie ! Pour ceux qui voudront s’étalonner au volant, 2 solutions avec le karting sur une piste inédite de 600m au cœur du paddock, et les nombreux simulateurs de conduite à disposition du public ! Pourquoi ne pas imaginer découvrir votre future voiture en live avec les stands de constructeurs, Renault, Alfa Romeo et Maserati ou encore vivre au cœur du WTCR avec une visite guidée de la pitlane …ou les baptêmes de piste avec des pilotes en Fomule 1 bi place ou GT ! Au programme de ces 2 journées, musique, écrans géants, des tribunes au cœur de l’action, courses nationales sous l’égide de la Fédération Royale Marocaine du Sport Automobile, émissions et animations avec Hit Radio et bien sur le plateau en direct de 2M qui retransmettra en live les essais et les courses !
                Côté billetterie, sachez qu’un Pass Anniversaire pour les 10 ans sera mis en vente à 100 dhs pour les deux jours, samedi 6 et dimanche 7 avril 2019. Les Pass Tribunes sont à 500 dhs pour les 2 jours. Quant aux enfants de moins de 10 ans, l’entrée sera gratuite. </p>
                </div>
                <div className='div2'>
                    <p>Ads</p>
                </div>
            </div>
            <Actuality/>
        </div>

    )
  }
export default Articles3;