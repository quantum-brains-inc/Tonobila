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
        const { title, description, author, city, date, key, downloadURLs } = doc.data();
        posts.push({
          key: doc.id,
          doc,
          title,
          description,
          author,
          city,
          date,
          downloadURLs
        });
      });
      this.setState({
        posts
    });
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }


  render() {
    return (
      <div className="latest-cards-container">
        {this.state.posts.map(post => 
          <Cards className="cards-item-1" name={post.title} city={post.city} date={post.date} keys={post.key} thumnail={post.downloadURLs[0]}></Cards>
        )}
      </div>
    )
  }
}
