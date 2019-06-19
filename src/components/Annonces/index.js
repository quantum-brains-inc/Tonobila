import React, { Component } from 'react'
import '../Latest/latest.css'
import './annonces.css'
import LatestCards from '../Latest-cards'
import AdvancedSearch from '../AdvancedSearch';
import firebase from '../../Firebase'

export default class Latest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ville:'',
      marque:'',
      modele:'',
      annee:'',
      prix:'',
      searchData: [],
      couleur_ex:'',
      couleur_in:'',
      kilometrage:''
    };
  }
  handleChange = event => {
    const { name, value } = event.target
    console.log(value)
    this.setState({
        [name]: value
    })
  } 
  searchSubmit = e =>{
    e.preventDefault();

    let  ref = firebase.firestore().collection('posts');
    if(this.state.ville != ''){
      ref = ref.where('ville', '==' , this.state.ville)
    }
    if(this.state.marque != ''){
      ref = ref.where('marque', '==' , this.state.marque)
    }
    if(this.state.modele != ''){
      ref = ref.where('modele', '==' ,this.state.modele)
    }
    if(this.state.annee != ''){
      ref = ref.where('annee', '==' ,this.state.annee)
    }
    if(this.state.prix != ''){
      ref = ref.where('prix', '<=' ,this.state.prix)
    }
    if(this.state.couleur_ex != ''){
      ref = ref.where('couleur_ex', '==' ,this.state.couleur_ex)
    }
    if(this.state.couleur_in != ''){
      ref = ref.where('couleur_in', '==' ,this.state.couleur_in)
    }
    if(this.state.kilometrage != ''){
      ref = ref.where('kilometrage', '<=' ,this.state.kilometrage)
    }
    ref.get().then(querySnapShot=>{
      const searchData = [];
      querySnapShot.forEach(doc=>{
        console.log(doc.data())
        const { title, description, author, ville, date, key,marque,modele, downloadURLs,prix,annee,couleur_ex,couleur_in,kilometrage} = doc.data();
        searchData.push({
          key: doc.id,
          doc,
          title,
          marque,
          modele,
          description,
          author,
          ville,
          date,
          downloadURLs,
          prix,
          annee,
          couleur_ex,
          couleur_in,
          kilometrage
        });
      });
      this.setState({
        searchData
      })
      this.refs.latestCards.searchSubmitData()
    })
  }
  render() {
    return (
      <div className="Latest ">
        <div className="latest-wrapper latest-annonce">
          <h1>Recherche Avancée</h1>
        </div>
        <div className="latest-content-wrapper">
          <AdvancedSearch 
            handleChange={this.handleChange}
            searchSubmit={this.searchSubmit}/>
          <LatestCards 
            searchData={this.state.searchData}
            ref="latestCards"/> 
        </div>
      </div>
    )
  }
}
