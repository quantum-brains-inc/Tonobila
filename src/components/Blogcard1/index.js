import React from 'react'
import './blog-card-1.css'
import Car from '../../images/golf8.jpg';
import Icon from '../../images/photo.png'
import {Link} from "react-router-dom";


const  Blogcard1 = ()=> {
  return (
    <div className="BlogCard" >
      <div className="blog-card-left-side">
        <div className="blog-card-img"><img src={Car}/><img src={Icon} className='pics-icon'/></div>
        <div className="blog-card-line"></div>
        <h2 className="blog-writer-name">Brahim baif</h2>
        <div className="Blog-card-botton">
            <p className="Blog-card-city">Agadir</p>
            <p className="Blog-card-date">Hier</p>
        </div>
      </div>
      <div className="blog-card-right-side">
        <div>
          <h1 className="blog-card-title">
          Finalement, Volkswagen devrait livrer les premières Golf 8 en fin d 'année
          </h1>
          <p>Volkswagen va mettre les petits plats dans les grands à l 'occasion de la présentation de la nouvelle Golf, qui ne se fera pas au salon de Francfort...</p>
        </div>
        <div>
        <Link to="/articles1">
            <button className="blog-card-more" >
            Suite</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
export default Blogcard1;