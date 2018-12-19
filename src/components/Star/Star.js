import React, { Component } from 'react'

class Star extends Component {

  constructor() {
    super()
    this.state = {
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight)
    }
  }

  returnStyle() {
    return ( {
      position: 'absolute',
      left: this.state.x,
      top: this.state.y
    }
    )
  }

  render() {
    return (
      <div className="circleBase star" style={this.returnStyle()}></div>
    )
  }
}

export default Star
