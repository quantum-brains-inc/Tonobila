import React, { Component } from 'react';
import Cards from '../Cards';
import './latest-cards.css';
export default class LatestCards extends Component {
  render() {
    return (
      <div className="latest-cards-container">
        <Cards className="cards-item-1"/>
        <Cards className="cards-item-2"/>
        <Cards className="cards-item-3"/>
        <Cards className="cards-item-4"/>
        <Cards className="cards-item-5"/>
        <Cards className="cards-item-6"/>
      </div>
    )
  }
}
