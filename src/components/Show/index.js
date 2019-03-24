import React, { Component } from 'react'
import './show.css'
import imag from '../../images/tesla.jpg'
import imag2 from '../../images/teslaM.jpg'
import imag3 from '../../images/tesla1.jpg'
import imag4 from '../../images/tesla2.jpg'


export default class Show extends Component {
    state = {
        imageURL: imag,
    }
  render() {
      const ChangeImage = (source) => {
          this.setState({
              imageURL: source,
          })
      }
    return (
      <div className="show">
        <h1>Model X | Tesla</h1>
        <div className="main_show_card card">
          <div className="left">
            <div className="show_image_large">
              <img src={this.state.imageURL} className='show_image'/>
            </div>
            
              <div className="show_image_thumnail" >
                <div>
                  <img src={imag} onClick={() =>  ChangeImage(imag)}/>
                </div>
                
                <div>
                  <img src={imag2} onClick={() =>  ChangeImage(imag2)}/>
                </div>
                
                <div>
                  <img src={imag3} onClick={() =>  ChangeImage(imag3)}/>
                </div>
                
                <div>
                  <img src={imag4} onClick={() =>  ChangeImage(imag4)}/>
                </div>
                

              </div>
          </div>
        </div>
      </div>
    )
  }
}