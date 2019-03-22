import React, { Component } from 'react';
import './home.css';
import Header from '../Header-home'
import Navbar from '../Navbar'
import Latest from '../Latest'
import AdBanner from '../AdBanner'
import Footer from '../Footer'
import Actuality from '../actuality'
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

export default App;