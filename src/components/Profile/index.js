import React, { Component } from 'react';
import './profile.css';
import img from '../../images/img.svg'
import Cards from '../Cards'
import firebase from '../../Firebase'

class Profile extends Component {
  render() {
    let user = firebase.auth().currentUser;
    console.log(user)
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
                  <Cards className="cards-item-1"/>
                  <Cards className="cards-item-2"/>
                  <Cards className="cards-item-3"/>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Profile;
