import React from 'react'
import Car from '../../images/mercedes.jpg';
import Icon from '../../images/photo.png'
import {Link} from "react-router-dom";


const  Blogcard2 = ()=> {
  return (
    <div className="BlogCard" >
      <div className="blog-card-left-side">
        <div className="blog-card-img"><img src={Car}/><img src={Icon} className='pics-icon'/></div>
        <div className="blog-card-line"></div>
        <h2 className="blog-writer-name">Yacine Benzmane</h2>
        <div className="Blog-card-botton">
            <p className="Blog-card-city">Agadir</p>
            <p className="Blog-card-date">Hier</p>
        </div>
      </div>
      <div className="blog-card-right-side">
        <div>
          <h1 className="blog-card-title">
          Mercedes Classe G: nouveau moteur et série spéciale pour les 40 ans
          </h1>
          <p>Pour fêter les 40 ans du Classe G, Mercedes propose la série spéciale "Stronger than time"...</p>
        </div>
        <div>
        <Link to="/articles2">
            <button className="blog-card-more" >
            Suite</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
export default Blogcard2;