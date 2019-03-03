import React, { Component } from 'react'

import './latest.css'
import LatestCards from '../Latest-cards'
import SearchMain from '../Search-main';



export default class Latest extends Component {
  render() {
    return (
      <div className="Latest">
      <div className="latest-wrapper">
        <h2>Voitures plus récentes</h2>
      </div>
      <div className="latest-content-wrapper">
        {/* <SearchMain id="ser"/>
        <LatestCards id="ser"/> */}
        <SearchMain/>
        <LatestCards />
      </div>

      </div>
    )
  }
}
