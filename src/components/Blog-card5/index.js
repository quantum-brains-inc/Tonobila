import React from 'react'
import Car from '../../images/renault.jpg';
import Icon from '../../images/photo.png'
import {Link} from "react-router-dom";


const  Blogcard5 = ()=> {
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
            5 Étoiles Pour La Renault CLIO 5 À L’ Euro NCAP
          </h1>
          <p>La cinquième génération de l’iconique Clio sera lancée très prochainement</p>
        </div>
        <div>
        <Link to="/articles5">
            <button className="blog-card-more" >
            Suite</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
export default Blogcard5;