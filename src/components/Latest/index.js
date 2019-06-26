import React, { Component } from 'react'
import './latest.css'
import LatestCards from '../Latest-cards'
import SearchMain from '../Search-main';
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
      searchData: []
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
    ref.get().then(querySnapShot=>{
      const searchData = [];
      querySnapShot.forEach(doc=>{
        const { title, description, author, ville, date, key,marque,modele, downloadURLs,prix,annee} = doc.data();
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
          annee
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
      <div className="Latest">
        <div className="latest-wrapper">
          <h1>Annonces les plus récentes</h1>
        </div>
        <div className="latest-content-wrapper">
          <SearchMain
          handleChange={this.handleChange}
          searchSubmit={this.searchSubmit}
          />
            <LatestCards 
            searchData={this.state.searchData}
            ref="latestCards"
            />
        </div>
      </div>
    )
  }
}