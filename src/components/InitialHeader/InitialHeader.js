import React, { Component } from 'react'
import './InitialHeader.css'

class InitialHeader extends Component {

  constructor() {
    super()
    this.state = {
      style: {position: 'absolute', top: '-400px'}
    }
  }

  componentDidMount() {
    this.setState({
      timer: setTimeout(this.transitionIn, 4)
    })
  }

  transitionIn = () => {
    this.setState({
      style: {position: 'absolute', left: `30vw`, top: '-400px', transform:`translate(0px, 400px)` }
    })
  }

  render() {
    return(
      <div className="transition-item" style={this.state.style}>
        <h1 className="patti-header">PATRICIA CARTER : SOFTWARE BADASS</h1>
        <div className="circleBase point"></div>
      </div>
    )
  }

}

export default InitialHeader
