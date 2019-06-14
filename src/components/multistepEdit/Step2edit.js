import React, { Component } from 'react'

export default class Step2edit extends Component {

    
    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <div>
                <h3>Détails Technique</h3>
                <div>
                    <label htmlFor="main">Première main</label>
                    <select
                        id="main"
                        defaultValue={this.props.main} 
                        value={this.props.main}
                        onChange={this.props.handleChange}
                        name="main">
                        <option value="" >Choisir Une Option...</option>
                        <option>Oui</option>
                        <option>Non</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="carburant">carburant</label>
                    <select
                        id="carburant"
                        defaultValue={this.props.carburant}
                        value={this.props.carburant}
                        onChange={this.props.handleChange}
                        name="carburant">
                        <option value="" >Choisir Une Option...</option>
                        <option>Essence</option>
                        <option>Diesel</option>
                        <option>Gasoil</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="couleur_ex">Couleur Extrieur</label>
                    <select
                        id="couleur_ex"
                        defaultValue={this.props.couleur_ex}
                        value={this.props.couleur_ex}
                        onChange={this.props.handleChange}
                        name="couleur_ex">
                        <option value="" >Choisir Une Option...</option>
                        <option>black</option>
                        <option>wa zreg</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="couleur_in">Couleur Interieur</label>
                    <select
                        id="couleur_in"
                        defaultValue={this.props.couleur_in}
                        value={this.props.couleur_in}
                        onChange={this.props.handleChange}
                        name="couleur_in">
                        <option value="" >Choisir Une Option...</option>
                        <option>red</option>
                        <option>pink</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Carrosserie">Carrosserie</label>
                    <select
                        id="carrosserie"
                        defaultValue={this.props.carrosserie}
                        value={this.props.carrosserie}
                        onChange={this.props.handleChange}
                        name="carrosserie">
                        <option value="" >Choisir Une Option...</option>
                        <option>Berline</option>
                        <option>Coupé</option>
                        <option>Familiale</option>
                        <option>Cabriolet</option>
                        <option>Pickup</option>
                        <option>4×4</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="kilometrage">kilometrage</label>
                    <input
                        id="kilometrage"
                        defaultValue={this.props.kilometrage}
                        value={this.props.kilometrage}
                        onChange={this.props.handleChange}
                        name="kilometrage"
                        type="number"
                        min="0"
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="num_port">Nombre De Porte</label>
                    <select
                        id="num_port"
                        defaultValue={this.props.num_port}
                        value={this.props.num_port}
                        onChange={this.props.handleChange}
                        name="num_port">
                        <option value="" >Choisir Une Option...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="puissance_fiscale">Puissance Fiscale</label>
                    <input
                        id="puissance_fiscale"
                        defaultValue={this.props.puissance_fiscale}
                        value={this.props.puissance_fiscale}
                        onChange={this.props.handleChange}
                        name="puissance_fiscale"
                        type="number"
                        min="0"
                    >
                    </input>
                </div>
            </div>
        )
    }
}
