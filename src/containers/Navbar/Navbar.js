import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return(
      <ul className="navbar">
        <li className="navbar-home"><p>ABOUT ME</p></li>
        <li className="navbar-portfolio with-shadow"><p>PORTFOLIO</p></li>
        <li className="navbar-resume with-shadow"><p>RESUME</p></li>
        <li className="navbar-contact with-shadow"><p>CONTACT</p></li>
      </ul>
    )
  }
}

export default Navbar
