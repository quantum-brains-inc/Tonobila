import React, { Component } from 'react'
import './search-main.css'

export default class SearchMain extends Component {
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
    carsModules:[],
    years:[],
    maxPrices:[]
  }
  optionHandlerChange = e =>{
      let carsModules = [];
      fetch('https://tonobila-api.herokuapp.com/'+e.target.value )
      .then(response => response.json() )
      .then(data => carsModules = data.map(car => car))
      .then(()=> this.setState({carsModules}) )  
  }
  getYears = () =>{
    let date = new Date()
    let years = [];
    let currentYear = date.getFullYear();
    for(let i = currentYear ; i >= 1900 ; i--){
      years.push(i);
    } 
    this.setState({years})
  }
  getMaxPriceArray = () =>{
    let maxPrices = [];
    for(let i = 10000 ; i <= 1000000 ; i+=10000){
      maxPrices.push(i);
    } 
    this.setState({maxPrices})
  }
  componentDidMount(){
    this.getYears();
    this.getMaxPriceArray();
  }

  render() {
    return (
      <div className="search-main">
        <h1>Recherche</h1>
        <form className="form-search-main" >
          <select name="marque" onChange={(e)=>{this.optionHandlerChange(e);this.props.handleChange(e)}}>
            <option value="">Choisir une marque</option>
            {this.state.cars.map(car=><option key={car} value={car}>{car}</option>)}
          </select>
          <select name="modele" onChange={(e)=>{this.props.handleChange(e)}}>
            <option value="">Choisir un modele</option>
            {this.state.carsModules.map(car=><option value={car} key={car} >{car}</option>)}
          </select>

          <select name="ville" onChange={(e)=>{this.props.handleChange(e)}}>
            <option value="">Choisir une ville</option>
            {this.state.cities.map(city=><option key={city} value={city}>{city}</option>)}
          </select>
          <select  name="annee" onChange={(e)=>{this.props.handleChange(e)}}>
            <option value="">Choisir un annee</option>
            {this.state.years.map(year=> <option key={year} value={year}>{year}</option>)}
          </select>
          <select name="prix" onChange={(e)=>{this.props.handleChange(e)}}>
            <option value="">Max prix</option>
            {this.state.maxPrices.map(price =><option value={price} key={price}>{price} DHs</option> )}
          </select>
          <button value="submit" onClick={this.props.searchSubmit}>Recherche</button>
        </form>
      </div>
    )
  }
}