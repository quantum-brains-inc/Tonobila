import React, { Component } from 'react'
import './advancedSearch.css'

export default class SearchMain extends Component {
  render() {
    return (
      <div className="search-main">
        <h1>Recherche</h1>
        <form className="form-search-main" >
          <select><option value="marque">marque</option></select>
          <select><option value="ville">ville</option></select>
          <select><option value="annee">annee</option></select>
          <select><option value="modele">modele</option></select>
          <select><option value="prix max">kilometrage</option></select>
          <select><option value="prix max">couleur exterieur</option></select>
          <select><option value="prix max">prix max</option></select>
          <select><option value="prix max">prix max</option></select>
          <select><option value="prix max">prix max</option></select>
          <button value="submit">Recherche</button>
        </form>
      </div>
    )
  }
}
