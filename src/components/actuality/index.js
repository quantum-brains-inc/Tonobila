import React from 'react'
import './actuality.css'
import BlogCard from '../Blog-card'
import BlogCard1 from '../Blogcard1'
import BlogCard2 from '../Blogcard2'

const Actuality = ()=> {
  return (
    <div className='actuality'>
      <h1>Actualités</h1>
      <div className='actuality-container'>
        <BlogCard1 />
        <BlogCard2 />
      </div>
    </div>
  )
}
export default Actuality;