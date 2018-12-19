import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Starfield from './containers/Starfield/Starfield.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Starfield />
      </div>
    );
  }
}

export default App;
