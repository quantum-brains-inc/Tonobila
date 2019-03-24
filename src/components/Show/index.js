import React, { Component } from 'react'
import './show.css'
import imag from '../../images/tesla.jpg'
import imag2 from '../../images/teslaM.jpg'
import imag3 from '../../images/tesla1.jpg'
import imag4 from '../../images/tesla2.jpg'
import Cards from '../Cards'


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
          <div className="right">
            <h1>Model X  |  Tesla </h1>
            <h4>Agadir</h4>
            <h4>+212 67353476</h4>
          </div>
        </div>
        <div>
          <table>
            <tr>
              <th>Kilométrage:</th>
              <td>170 000</td>
            </tr>
            <tr>
              <th>Année:</th>
              <td>2012</td>
            </tr>
            <tr>
              <th>Boite de vitesses:</th>
              <td>Manuelle</td>
            </tr>
            <tr>
              <th>Carburant</th>
              <td>Diesel</td>
            </tr>
            <tr>
              <th>Diesel</th>
              <td>20-02-2019</td>
            </tr>
            <tr>
              <th>Nombre de portes</th>
              <td>5</td>
            </tr>
            <tr>
              <th>Couleur</th>
              <td>gris</td>
            </tr>
            <tr>
              <th>Carrosserie</th>
              <td>Utilitaire (minivan)</td>
            </tr>
            <tr>
              <th>Véhicule préparée</th>
              <td>Oui</td>
            </tr>
            <tr>
              <th>Première main</th>
              <td>Oui</td>
            </tr>
            <tr>
              <th>Véhicule dédouané</th>
              <td>2017</td>
            </tr>
            <tr>
              <th>2017</th>
              <td>Volkwagen touran diesael 1.6 ,7 place panoramique ,modele
                 2012 dewana 2017
              </td>
            </tr>
          </table>
        </div>
        <div className="show_other_cards">
          <div>
            <Cards/>
            <Cards/>
            <Cards/>
          </div>
        </div>
      </div>
    )
  }
}