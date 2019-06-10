import React, { Component } from 'react'


export default class Step1 extends Component {

    render() {
        if (this.props.currentStep !== 1) { 
            return null
        }
        
        return (
            <div>
                <h3>Détails de Véhicule</h3>
                <div>
                    <label htmlFor="marque">Marque*</label>
                    <select
                        id="marque"
                        value={this.props.marque} 
                        onChange={this.props.handleChange} 
                        name="marque">
                        <option selected>Choisir Une Option...</option>
                        <option>Tesla</option>
                        <option>BMW</option>
                        <option>Ford</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="modele">Modéle*</label>
                    <select
                        id="modele"
                        value={this.props.modele}
                        onChange={this.props.handleChange}
                        name="modele">
                        <option selected>Choisir Une Option...</option>
                        <option>Model x</option>
                        <option>Model Y</option>
                        <option>Model 3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="adresse">Adresse*</label>
                    <input
                        id="adresse"
                        value={this.props.adresse}
                        onChange={this.props.handleChange}
                        name="adresse">
                    </input>
                </div>
                <div>
                    <label htmlFor="ville">Ville*</label>
                    <select
                        id="ville"
                        value={this.props.ville}
                        onChange={this.props.handleChange}
                        name="ville">
                        <option selected>Choisir Une Option...</option>
                        <option>Agadir</option>
                        <option>Casablanca</option>
                        <option>Rabat</option>
                        <option>Tanger</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="annee">Mise en Circulation*</label>
                    <input
                        id="annee"
                        value={this.props.annee}
                        onChange={this.props.handleChange}
                        name="annee"
                        type="date"
                        >
                    </input>
                </div>
                <div>
                    <label htmlFor="prix_max">Prix*</label>
                    <input
                        id="prix_max"
                        value={this.props.prix_max}
                        onChange={this.props.handleChange}
                        name="prix_max"
                        type="number"
                        min="0"
                        >
                    </input>
                </div>
            </div>
        )
    }
}
