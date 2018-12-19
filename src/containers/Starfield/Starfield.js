import React, { Component } from 'react'
import Star from '../../components/Star/Star'

class Starfield extends Component {

  renderStars() {
    const stars = []
    for(let i = 0; i < 200; i++) {
      stars.push(<Star />)
    }
    return stars
  }

  render() {
    return (
      <>
        {this.renderStars()}
      </>
    )
  }
}

export default Starfield
