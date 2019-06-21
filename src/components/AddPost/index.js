import React, { Component } from 'react'
import './add.css';
import firebase from '../../Firebase'
import { connect } from "react-redux";
import Master from "../multiStep/Master"

class AddPost extends Component { 
          
  render() {
    let user = firebase.auth().currentUser;
    return (
      <div className='add-post'>
        <Master/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(AddPost);