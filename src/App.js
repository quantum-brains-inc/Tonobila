import React, { Component } from 'react';
import './App.css';
import Header from './components/Header-home'
import Navbar from './components/Navbar'
import Latest from './components/Latest'
import AdBanner from './components/AdBanner'
import Footer from './components/Footer'
import Actuality from './components/actuality'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="back-ground">
          <Latest />
          {/* <AdBanner/>
          <Actuality/> */}
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;