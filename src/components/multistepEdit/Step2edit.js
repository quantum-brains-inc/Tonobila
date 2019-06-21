import React, { Component } from 'react'

export default class Step2edit extends Component {
    state={
        couleur:["Argent", "Beige", "Blanc", "Blue", "Blue marine", "Doré", "Gris", "Jaune", "Marron", "Mauve", "Noir", "Orange", "Rose", "Rouge", "Turquoise", "Vert", "Violet"],
    }
    
    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        let mainOui,mainNon,carES,carDie,carGas,nbrPort2,nbrPort4;
        mainOui = mainNon = carES = carDie = carGas = nbrPort2 = nbrPort4 = ''
        if(this.props.main == 'Oui'){
            mainOui = 'checked'
        }else{
            mainNon = 'checked'
        }
        if(this.props.carburant == 'Essence'){
            carES = 'checked'
        }else if(this.props.carburant == 'Diesel'){
            carDie = 'checked'
        }else{
            carGas = 'checked'
        }
        if(this.props.num_port == '2'){
            nbrPort2 = 'checked'
        }else{
            nbrPort4 = 'checked'
        }
        return (
            <div className="steps">
                <div>
                    <div>
                        <h4>Première main</h4>
                        <div className="radiosInputs">
                            <div className="radioContaienr">
                                <input id="mainOui" type="radio" name="main" value='Oui' checked={mainOui} onChange={this.props.handleChange}/><label htmlFor="mainOui">Oui</label>
                            </div>
                            <div className="radioContaienr">
                                <input id="mainNon" type="radio" name="main" value='Non' checked={mainNon} onChange={this.props.handleChange}/><label htmlFor="mainNon">Non</label>
                            </div>
                        </div>
                        
                       
                    </div>
                    <div>
                        <h4>carburant</h4>
                        <div className="radiosInputs">
                            <div className="radioContaienr">
                                <input id="carES" type="radio" name="carburant" value="Essence" checked={carES} onChange={this.props.handleChange}/><label htmlFor="carES">Essence</label>
                            </div>
                            <div className="radioContaienr">
                                <input id="carDie" type="radio" name="carburant" value="Diesel" checked={carDie} onChange={this.props.handleChange}/><label htmlFor="carDie">Diesel</label>
                            </div>
                            <div className="radioContaienr">
                                <input id="carGas" type="radio" name="carburant" value="Gasoil" checked={carGas} onChange={this.props.handleChange}/><label htmlFor="carGas">Gasoil</label>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <label htmlFor="couleur_ex">Couleur Extrieur</label>
                        <select
                            id="couleur_ex"
                            value={this.props.couleur_ex}
                            onChange={this.props.handleChange}
                            name="couleur_ex">
                            <option value="" >Choisir Une Option...</option>
                            {this.state.couleur.map(color =><option value={color} key={color}>{color}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="couleur_in">Couleur Interieur</label>
                        <select
                            id="couleur_in"
                            value={this.props.couleur_in}
                            onChange={this.props.handleChange}
                            name="couleur_in">
                            <option value="" >Choisir Une Option...</option>
                            {this.state.couleur.map(color =><option value={color} key={color}>{color}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="Carrosserie">Carrosserie</label>
                        <select
                            id="carrosserie"
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
                            value={this.props.kilometrage}
                            onChange={this.props.handleChange}
                            name="kilometrage"
                            type="number"
                            min="0"
                            >
                        </input>
                    </div>
                    <div>
                        <h4>Nombre De Porte</h4>
                        <div className="radiosInputs">
                            <div className="radioContaienr">
                                <input type="radio" id="nbrPort2" value="2" name="num_port" checked={nbrPort2} onChange={this.props.handleChange}/><label htmlFor="nbrPort2" >2 portes</label>
                            </div>
                            <div className="radioContaienr">
                                <input type="radio" id="nbrPort4" value="4" name="num_port" checked={nbrPort4} onChange={this.props.handleChange}/><label htmlFor="nbrPort4" >4 portes</label>
                            </div>
                        </div>
                            
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
               
            </div>
        )
    }
}
