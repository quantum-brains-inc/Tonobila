import React, { Component } from 'react'

import './latest.css'
import LatestCards from '../Latest-cards'
import SearchMain from '../Search-main';



export default class Latest extends Component {
  render() {
    return (
      <div className="Latest">
        <div className="latest-wrapper">
          <h1>Voitures plus récentes</h1>
        </div>
        <div className="latest-content-wrapper">
          <SearchMain/>
          <LatestCards />
        </div>
      </div>
    )
  }
}
