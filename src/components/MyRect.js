import React from 'react';
import ReactDOM from 'react-dom';
import {Rect} from 'react-konva';
import Konva from 'konva'

export default class MyRect extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = {
      color : 'green'
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
      <Rect
        x={10} y ={10} width={50} height={50}
        fill = {this.state.color}
        shadowBlur={10}
        onClick={this.handleClick}
      />
    );

  }
}
