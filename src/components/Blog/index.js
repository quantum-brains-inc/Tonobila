import React from 'react'
import './blog.css'
import BlogCard from '../Blog-card'
import BlogCard1 from '../Blogcard1'
import BlogCard2 from '../Blogcard2'
import BlogCard3 from '../Blogcard3'
import BlogCard4 from '../Blogcard4'
import BlogCard5 from '../Blog-card5'
import BlogCard6 from '../Blogcard6'

const Blog = ()=> {
    return ( 
        <div className="blog-container">
            <div className="blogSection">
                <h1>Blog</h1>
            <div class="blog-wrapper">
                
                    <BlogCard1/>
                    <BlogCard2/>        
            </div>
            <div class="blog-wrapper">
                
                <BlogCard3/>
                <BlogCard4/>        
        </div>
        <div class="blog-wrapper">
                
                <BlogCard5/>
                <BlogCard6/>        
        </div>
            </div>
            


        </div>

    )
  }
export default Blog
