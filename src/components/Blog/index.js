import React from 'react'
import './blog.css'
import BlogCard from '../Blog-card'

const Blog = ()=> {
    return ( 
        <div className="blog-container">
            <div className="blogSection">
                <h1>Blog</h1>
            <div class="blog-wrapper">
                
                    <BlogCard/>
                    <BlogCard/>        
            </div>
            <div class="blog-wrapper">
                
                <BlogCard/>
                <BlogCard/>        
        </div>
        <div class="blog-wrapper">
                
                <BlogCard/>
                <BlogCard/>        
        </div>
            </div>
            


        </div>

    )
  }
export default Blog
