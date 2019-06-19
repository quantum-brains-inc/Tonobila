import React from 'react';
import Car from '../../images/tesla.jpg';
import './Cards.css';
import Icon from '../../images/photo.png'
import {Link} from 'react-router-dom'

const Cards = (props) =>{ 
  return (
      <div className="card" >
      <Link to={`/show/${props.keys}`}>
        <div className="card-img"><img src={props.thumnail}/></div>
        <div className="card-line"></div>
        <h2 className="card-title">{props.carName}</h2>
        <div className="card-bottom">
            <p className="card-city">{props.ville}</p>
            <p className="card-date">{props.prix} DH</p>
        </div>
        </Link>
      </div>

  )
}
export default Cards;