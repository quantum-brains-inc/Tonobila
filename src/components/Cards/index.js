import React from 'react';
import Car from '../../images/tesla.jpg';
import './Cards.css';
import Icon from '../../images/photo.png'
import {Link} from 'react-router-dom'

const Cards = (props) =>{ 
  return (
      <div className="card" >
      <Link to={`/show/${props.keys}`}>
          <div className="card-img"><img src={props.thumnail}/><img src={Icon} className='pics-icon'/></div>
              <div className="card-line"></div>
              <h2 className="card-title">{props.name}</h2>
              <div className="card-bottom">
                  <p className="card-city">{props.city}</p>
                  <p className="card-date">{props.date}</p>
              </div>
        </Link>
      </div>

  )
}
export default Cards;