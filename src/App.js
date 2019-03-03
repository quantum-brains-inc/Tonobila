import React, { Component } from 'react';
import './App.css';
import Header from './components/Header-home'
import Navbar from './components/Navbar'
import Latest from './components/Latest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Latest />
      </div>
    );
  }
}

export default App;