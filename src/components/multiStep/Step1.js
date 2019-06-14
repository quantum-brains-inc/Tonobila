import React, { Component } from 'react'


export default class Step1 extends Component {
    state={
        cities:[
            "Agadir", "Ain Harrouda", "Al Hoceima", "Azrou", "Aït Melloul",
            "Ben Guerir", "Beni Ansar", "Beni Mellal", "Benslimane", "Berkane",
            "Berrechid", "Bouskoura", "Casablanca", "Dar Bouazza", "Dcheira El Jihadia",
            "Drargua", "El Jadida", "El Kelaa Des Sraghna", "Errachidia", "Essaouira",
            "Fez", "Fnideq", "Fquih Ben Salah", "Guelmim", "Guercif", "Inezgane",
            "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Ksar El Kebir", 
            "Lahraouyine", "Larache", "Lqliaa", "M'diq", "Marrakech", "Martil",
            "Meknes", "Midelt", "Mohammedia", "Nador", "Ouarzazate", "Ouazzane",
            "Oued Zem", "Oujda", "Oulad Teima", "Rabat", "Safi", "Sale", "Sefrou",
            "Settat", "Sidi Bennour", "Sidi Kacem", "Sidi Slimane", "Skhirat",
            "Souk El Arbaa", "Suq as-Sabt Awlad an-Nama", "Tan-Tan", "Tangier",
            "Taourirt", "Taroudant", "Taza", "Temara", "Tetouan", "Tifelt",
            "Tiznit", "Youssoufia"
        ],
        cars:[
            "abarth","acura","alpha-romeo","aston-martin","audi","bentley"
            ,"bmw","bugatti","cadillac","chevrolet","chrysler","citroen",
            "corvette","dacia","daewoo","daihatsu","dodge","ferrari","fiat",
            "ford","gmc","honda","hummer","hyundai","infiniti","isuzu",
            "jaguar","jeep","kia","lamborghini","lancia","land-rover",
            "lexus","lincoln","lotus","maserati","maybach","mazda","mclaren"
            ,"mercedes","mini","mitsubishi","nissan","opel","peugeot","pontiac",
            "porsche","renault","rolls-royce","rover","saab","seat","skoda","smart",
            "ssangyong","subaru","suzuki","tesla","toyota","volkswagen","volvo"
        ],
        carsModules:[]
    }
    optionHandlerChange(e){
        let carsModules = [];
        fetch('https://tonobila-api.herokuapp.com/'+e.target.value)
        .then(response => response.json() )
        .then(data => carsModules = data.map(car => car))
        .then(()=> this.setState({carsModules}) )  
    }
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
                        onChange={(e)=>{this.props.handleChange(e);this.optionHandlerChange(e)}} 
                        name="marque">
                        <option value="" >Choisir Une Option...</option>
                        {this.state.cars.map(car=> <option key={car} value={car}>{ car }</option>)}
                    </select>
                </div>
                <div>   
                    <label htmlFor="modele">Modéle*</label>
                    <select
                        id="modele"
                        value={this.props.modele}
                        onChange={this.props.handleChange}
                        name="modele">
                        <option value="" >Choisir Une Option...</option>
                        {this.state.carsModules.map(module => <option key={module} value={module}>{module}</option> )}
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
                        <option value="" >Choisir Une Option...</option>
                        {this.state.cities.map(city => <option key={city} value={city}>{city}</option>)}
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
                    <label htmlFor="telephone">telephone*</label>
                    <input
                        id="telephone"
                        value={this.props.telephone}
                        onChange={this.props.handleChange}
                        name="telephone"
                        type="tel"
                        min="0"
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
