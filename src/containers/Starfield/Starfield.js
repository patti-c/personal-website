import React, { Component } from 'react'
import Star from '../../components/Star/Star'
import uuid from 'uuid'

const starTypes = [
  {
    boxShadow: `0px 0px 4px 2px #F8F8F8`,
  },
  {
    boxShadow: `0px 0px 4px 2px #F8F8F8`,
    opacity: '0.5'
  },
  {
    boxShadow: `0px 0px 4px 2px #F8F8F8`
  },
  {
    boxShadow: `0px 0px 2px 1px #F8F8F8`,
    opacity: '0.5'
  },
]

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
      const defaultCoords = this.generateStarCoordinates()
      this.state.starArray.push(
        <Star
          oldCoords={defaultCoords}
          newCoords={defaultCoords}
          key={uuid()}
          translate={0}
          starType={starTypes[~~(starTypes.length * Math.random())]}
        />
      )
    }
  }

  generateStarCoordinates() {
    return {
      x: Math.floor((Math.random() * window.innerWidth) - 5),
      y: Math.floor((Math.random() * window.innerHeight) - 5)
    }
  }

  moveStars = () => {
    const newStars = this.state.starArray.map(star =>
      <Star
        oldCoords={star.props.newCoords}
        key={uuid()}
        newCoords={this.generateStarCoordinates()}
        starType={star.props.starType}
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
