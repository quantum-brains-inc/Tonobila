import React from 'react'
import Car from '../../images/race of morocco.jpg';
import Icon from '../../images/photo.png'
import {Link} from "react-router-dom";


const  Blogcard3 = ()=> {
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
            Race of Morocco 2019: Le plus grand évènement automobile en Afrique
          </h1>
          <p>Parmi les nouvelles marques qui débuteront cette année à Marrakech, citons Geely Group qui à travers la structure de Cyan Racing engagera pas moins de 4 voitures !</p>
        </div>
        <div>
        <Link to="/articles3">
            <button className="blog-card-more" >
            Suite</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
export default Blogcard3;