import React from 'react';
import Car from '../../images/tesla.jpg';
import './Cards.css'

 const Cards = () =>{
  return (
      <div className="card" >
            <div className="card-img"><img src={Car}/><img className='pics-icon'/></div>
            <div className="card-line"></div>
            <h2 className="card-title">o9ssim billah a5oti</h2>
            <div className="card-bottom">
                <p className="card-city"> hello</p>
                <p className="card-date"> best car eva</p>
            </div>
        </div>
  )
}
export default Cards;