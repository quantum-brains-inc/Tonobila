import React from 'react'
import Car from '../../images/hummer.jpg';
import Icon from '../../images/photo.png'
import {Link} from "react-router-dom";


const  Blogcard4 = ()=> {
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
            Le Hummer bientôt de retour en version électrique
          </h1>
          <p> Cela fait presque 10 ans que le Hummer n 'est plus commercialisé par le groupe General Motors. </p>
        </div>
        <div>
        <Link to="/articles4">
            <button className="blog-card-more" >
            Suite</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
export default Blogcard4;