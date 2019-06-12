import React, { Component } from 'react';
import './home.css';
import Header from '../Header-home'
import Latest from '../Latest'
import AdBanner from '../AdBanner'
import Actuality from '../actuality'
import { connect } from "react-redux";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="back-ground">
          <Latest />
          <AdBanner/>
          <Actuality/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(App);