import React, { Component } from 'react'

const animation = ``

class Star extends Component {

  returnStyle() {
    return ({
      position: 'absolute',
      left: this.props.coords.x,
      top: this.props.coords.y,
      transform: `translate(${this.props.translateX}px, ${this.props.translateY}px)`
    })
  }

  render() {
    return (
      <div className="circleBase star" style={this.returnStyle()}></div>
    )
  }
}

export default Star
