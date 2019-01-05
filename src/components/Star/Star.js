import React, { Component } from 'react'

class Star extends Component {

  constructor(props) {
    super(props)
    this.state = {
      style: {
        position: 'absolute',
        left: this.props.oldCoords.x,
        top: this.props.oldCoords.y
      }
    }
  }

  updateCoords = () => {
    let xTranslation = this.props.newCoords.x - this.props.oldCoords.x
    let yTranslation = this.props.newCoords.y - this.props.oldCoords.y
    this.setState({
      style: {
        position: 'absolute',
        left: this.props.oldCoords.x,
        top: this.props.oldCoords.y,
        transform: `translate(${xTranslation}px, ${yTranslation}px)`
      }
    })
  }

  componentDidMount() {
    if(this.props.newCoords) {
      this.setState({
        timer: setTimeout(this.updateCoords, 4)
      })
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer)
  }

  render() {
    return (
      <span className="circleBase star" style={Object.assign({}, this.state.style, this.props.starType)}></span>
    )
  }
}

export default Star
