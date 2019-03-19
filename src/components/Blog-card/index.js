import React from 'react'
import './Blog-card.css'
import Car from '../../images/tesla.jpg';
import Icon from '../../images/photo.png'

const BlogCard = ()=> {
  return (
    <div className="BlogCard" >
      <div className="blog-card-left-side">
        <div className="blog-card-img"><img src={Car}/><img src={Icon} className='pics-icon'/></div>
        <div className="blog-card-line"></div>
        <h2 className="blog-writer-name">Brahim baif</h2>
        <div className="Blog-card-botton">
            <p className="Blog-card-city"> Agadir</p>
            <p className="Blog-card-date"> Yesterday</p>
        </div>
      </div>
      <div className="blog-card-right-side">
        <div>
          <h1 className="blog-card-title">
          Teslas Are Getting a “Party
            and Camping Mode”
          </h1>
          <p>The new modes would also Tesla owners to power various electronic devices directly from the car’s remaining battery reserves — a big battery means plenty of juice for running air conditioning systems and music while powering things like coolers or external lights...</p>
        </div>
        <div>
          <button className="blog-card-more">Read more</button>
        </div>
      </div>
      
    </div>
  )
}
export default BlogCard; 