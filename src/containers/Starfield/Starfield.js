import React, { Component } from 'react'
import Star from '../../components/Star/Star'
import uuid from 'uuid'

class Starfield extends Component {

  constructor() {
    super()
    this.state = {
      starArray: []
    }
    this.generateStars()
  }

  generateStars() {
    for(let i = 0; i < 120; i++) {
      this.state.starArray.push(
        <Star
          coords={this.generateStarCoordinates()}
          key={uuid()}
          translate={0}
        />
      )
    }
  }

  generateStarCoordinates() {
    return {
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight)
    }
  }

  moveStars = () => {
    const newStars = this.state.starArray.map(star =>
      <Star
        coords={star.props.coords}
        key={uuid()}
        translateX={Math.floor(Math.random() * window.innerHeight)}
        translateY={Math.floor(Math.random() * window.innerHeight)}
      />
    )

    this.setState({
      starArray: newStars
    })

  }

  render() {
    return (
      <>
        <button onClick={this.moveStars}>move stars</button>
        {this.state.starArray}
      </>
    )
  }
}

export default Starfield
