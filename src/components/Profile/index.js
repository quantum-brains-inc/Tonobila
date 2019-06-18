import React, { Component } from 'react';
import './profile.css';
import img from '../../images/img.svg'
import Cards from '../Cards'
import firebase from '../../Firebase'



class Profile extends Component {

  constructor(props) {
      super(props);
      this.state = {
        loading: false
      };
  }

  componentDidMount(){
    let user = firebase.auth().currentUser;
    let user_uid = user.uid
    let query = firebase.firestore().collection("posts").where('uid.uid', '==', `${user_uid}`)
    const posts = [];
    query.get().then((querySnapshot => {
      querySnapshot.forEach(doc => {
        const {
          title,
          description,
          author,
          ville,
          date,
          key,
          marque,
          modele,
          downloadURLs
        } = doc.data();
        posts.push({
          key: doc.id,
          doc,
          title,
          marque,
          modele,
          description,
          author,
          ville,
          date,
          downloadURLs
        });
      })
    }));
    this.setState({
      posts
    });
        setTimeout(() => {
          this.makeCard()
        },1000)
  }

  makeCard() {
        this.setState({
          loading: true
        })
  }

  render() {
    let user = firebase.auth().currentUser;
    if (!this.state.loading)
      return null;
    return (
      <div className="App_profile">
          <div className="profile-container">
            <div className="left-side">
              <div className="container1">
                <div className="pdp1">
                  <img src={user.photoURL} alt='pdp'/>
                  <div className="change-pic">
                    <img src={img} alt="img"/>
                  </div>
                </div>
                <h1 className='profile-user-name'>{user.displayName}</h1>
                <p className="profile-city">Agadir</p>
                <p className="profile-city">{user.email}</p>
                <div className="create-post-btn">
                  <button className="create-post">Create Post</button>
                </div>
                <div className="profile-statistics">
                  <table className='tbl'>
                    <tr>
                      <th>Posts</th>
                      <th>Sold</th> 
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>10</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div>
                <div className="latest-cards-container">
                {
                  this.state.posts.map(post =>
                   <Cards 
                     className="cards-item-1" 
                     carName={post.marque+' '+post.modele} 
                     ville={post.ville}
                     keys={post.key} 
                     thumnail={post.downloadURLs[0]}>
                   </Cards>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Profile;
