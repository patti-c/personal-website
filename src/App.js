import React, { Component } from 'react';
import './App.css';
import Starfield from './containers/Starfield/Starfield.js'
import Navbar from './containers/Navbar/Navbar'
import InitialHeader from './components/InitialHeader/InitialHeader'

class App extends Component {

  constructor() {
    super()
    this.state = {
      initial: true
    }
  }

  initialScreen() {
    return (
      <div onClick={() => this.setState({initial: false})} className="header">
        <InitialHeader />
      </div>
    )
  }

  homeScreen() {
    return(
      <Navbar />
    )
  }

  render() {
    return (
      <div className="App">
        {this.state.initial ? this.initialScreen() : this.homeScreen() }
        <Starfield />
      </div>
    );
  }
}

export default App;
