import React, { Component } from 'react'
import '../Latest/latest.css'
import './annonces.css'
import LatestCards from '../Latest-cards'
import SearchMain from '../AdvancedSearch';

export default class Latest extends Component {
  render() {
    return (
      <div className="Latest ">
        <div className="latest-wrapper latest-annonce">
          <h1>Recherche Avancée</h1>
        </div>
        <div className="latest-content-wrapper">
          <SearchMain/>
          <LatestCards />
        </div>
      </div>
    )
  }
}
