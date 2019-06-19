import React from 'react'
import Car from '../../images/toyota.jpg';
import Icon from '../../images/photo.png'
import {Link} from "react-router-dom";


const  Blogcard6 = ()=> {
  return (
    <div className="BlogCard" >
      <div className="blog-card-left-side">
        <div className="blog-card-img"><img src={Car}/><img src={Icon} className='pics-icon'/></div>
        <div className="blog-card-line"></div>
        <h2 className="blog-writer-name">Hafid Smail</h2>
        <div className="Blog-card-botton">
            <p className="Blog-card-city">Agadir</p>
            <p className="Blog-card-date">Hier</p>
        </div>
      </div>
      <div className="blog-card-right-side">
        <div>
          <h1 className="blog-card-title">
            La Toyota Corolla S arrive en concession
          </h1>
          <p>On ne peut pas l’oublier, Corolla a un historique assez long, son histoire remonte à la fin des années soixante avec la version E10. </p>
        </div>
        <div>
        <Link to="/articles6">
            <button className="blog-card-more" >
            Suite</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
export default Blogcard6;