import React from 'react';
import Car from '../../images/tesla.jpg';
import './Cards.css';
import Icon from '../../images/photo.png'
import {Link} from 'react-router-dom'

 const Cards = () =>{
  return (
    <Link to='/show'>
      <div className="card" >
          <div className="card-img"><img src={Car}/><img src={Icon} className='pics-icon'/></div>
              <div className="card-line"></div>
              <h2 className="card-title">Model X | Tesla</h2>
              <div className="card-bottom">
                  <p className="card-city"> Agadir</p>
                  <p className="card-date"> Yesterday</p>
              </div>
      </div>
    </Link>
  )
}
export default Cards;