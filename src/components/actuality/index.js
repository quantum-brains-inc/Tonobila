import React from 'react'
import './actuality.css'
import BlogCard from '../Blog-card'

const Actuality = ()=> {
  return (
    <div className='actuality'>
      <h1>Actualités</h1>
      <div className='actuality-container'>
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}
export default Actuality;