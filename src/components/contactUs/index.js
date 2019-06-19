import React, { Component } from 'react'
import './contact.css';


class contactUs extends Component { 
          
  render() {
    return (
        <div className="contact-us-wrapper">
          <div className="contact-us">
            <form>
              <h2 className="get-in-touch">Contactez Nous</h2>
              <input className="contact-name" type='text' placeholder='Full Name' />
              <input className="contact-email" type='email' placeholder='Email' />
              <textarea name="contact" cols="30" rows="7" placeholder='your message'></textarea>
              <button>Submit</button>
            </form>
            
          </div>
        </div>
    )
  }
}

export default contactUs;