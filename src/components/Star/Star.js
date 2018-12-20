import React, { Component } from 'react'

const animation = ``

class Star extends Component {

  constructor() {
    super()
    this.state = {
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
      animate: false
    }
  }

  returnStyle() {
    if(this.state.animate === false) {
      return ({
        position: 'absolute',
        left: this.state.x,
        top: this.state.y
      })
    }
  }

  render() {
    return (
      <div className="circleBase star" style={this.returnStyle()}></div>
    )
  }
}

export default Star
