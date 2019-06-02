import React from 'react'
import './error.css'
import errorpic from '../../images/error.svg'
import {Link} from "react-router-dom";
const Error = ()=> {
    return ( 
        <div className='bg-404'>
             <img src={errorpic} draggable="false"/>
            <Link to='/'>
             <button className="btn-404">
                 Go Home !
             </button>
             </Link>
        </div>
    )
  }
export default Error;
