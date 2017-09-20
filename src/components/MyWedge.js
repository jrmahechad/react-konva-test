import React from 'react';
import ReactDOM from 'react-dom';
import {Wedge} from 'react-konva';
import Konva from 'konva'

export default class MyWedge extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = {
      color : Konva.Util.getRandomColor()
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      color: Konva.Util.getRandomColor()
    })
  }
  render () {
    return (
      <Wedge
        x={this.props.x} y ={this.props.y} radius={this.props.radius} angle={this.props.angle}
        rotation = {this.props.rotation}
        fill = {this.state.color}
        onClick={this.handleClick}
      />
    );

  }
}
