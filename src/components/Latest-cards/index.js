import React, { Component } from 'react';
import Cards from '../Cards';
import './latest-cards.css';
import firebase from '../../Firebase'

export default class LatestCards extends Component {

    constructor(props) {
      super(props);
      this.ref = firebase.firestore().collection('posts');
      this.unsubscribe = null;
      this.state = {
        posts: []
      };
    }

      onCollectionUpdate = (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
      const { title, description, prix, author, ville, date, key , marque,modele, downloadURLs } = doc.data();
      posts.push({
        key: doc.id,
        doc,
        title,
        marque,
        modele,
        prix,
        description,
        author,
        ville,
        date,
        downloadURLs
      });
    });
    this.setState({
      posts
    });
    }
    getTime(arg){
      let months = [
        "Jan","Fev","Mar","Avr","Mai","Jui","Jul",
        "Aout","Sept","Oct","Nov","Dec"
      ];
      let days = ['Dim','Lun','Mar','Mer','jeu','Ven','Sam']
      let date = new Date(arg*1000)
      let day = date.getDate();
      let daynumb = date.getDay()
      let month = date.getMonth();
      let year = date.getFullYear();
      let formattedTime = days[daynumb]+' '+day+' '+ months[month] + ' '+ year;
      return formattedTime
    }
    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
    searchSubmitData= () => this.setState({posts : this.props.searchData})
  render() {
    let content = this.state.posts.length > 0 ? 
    (this.state.posts.map(post => 
        <Cards 
        className="cards-item-1" 
        carName={post.marque+' '+post.modele} 
        ville={post.ville}  
        date={this.getTime(post.doc._document.version.timestamp.seconds)} 
        keys={post.key}
        prix={post.prix} 
        thumnail={post.downloadURLs[0]}></Cards>
      )
    ) 
    : <h3 className="error-search"> Aucun Resultat Pour Cette Recherche</h3> 
    return (
      <div className="latest-cards-container">
        {content}
      </div>
    )
  }
}