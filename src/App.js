import React, { Component } from 'react';
import './App.css';
import Header from './components/Header-home'
import Navbar from './components/Navbar'
import Latest from './components/Latest'
import AdBanner from './components/AdBanner'
// import AdBanner from './components/AdBanner/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="back-ground">
        <Latest />
        <AdBanner/>
        </div>
      </div>
    );
  }
}

export default App;