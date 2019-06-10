import React, { Component } from 'react'

export default class Step2 extends Component {
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
                        value={this.props.main}
                        onChange={this.props.handleChange}
                        name="main">
                        <option>Oui</option>
                        <option>Non</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="carburant">carburant</label>
                    <select
                        id="carburant"
                        value={this.props.carburant}
                        onChange={this.props.handleChange}
                        name="carburant">
                        <option>Essence</option>
                        <option>Diesel</option>
                        <option>Gasoil</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="couleur_ex">Couleur Extrieur</label>
                    <select
                        id="couleur_ex"
                        value={this.props.couleur_ex}
                        onChange={this.props.handleChange}
                        name="couleur_ex">
                        <option>black</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="couleur_in">Couleur Interieur</label>
                    <select
                        id="couleur_in"
                        value={this.props.couleur_in}
                        onChange={this.props.handleChange}
                        name="couleur_in">
                        <option>red</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Carrosserie">Carrosserie</label>
                    <select
                        id="carrosserie"
                        value={this.props.carrosserie}
                        onChange={this.props.handleChange}
                        name="carrosserie">
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
                        value={this.props.num_port}
                        onChange={this.props.handleChange}
                        name="num_port">
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