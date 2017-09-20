import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyRect from './components/MyRect'
import MyWedge from './components/MyWedge'
import PolarGraph from './components/PolarGraph'
import {Layer,  Stage, Group, Wedge,Text} from 'react-konva';


class App extends Component {
  render() {
    var styles={
      background:'green',
      marginLeft: '150px'
    }
    const testData = {
      power5s: {
        value: 1575,
        graphValue: 0.24491999999999997,
        status: "valid"
      },
      power1m: {
        value: 735,
        graphValue: 0.233455,
        status: "valid"
      },
      power5m: {
        value: 490,
        graphValue: 0.25999999999999995,
        status: "valid"
      },
      power20m: {
        value: 350,
        status: "valid"
      },
      riderType: "0TUe0P6vwx",
      riderWeakness: "sXgDu35LXB",
      status: "ok"
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div style={styles}>
          <PolarGraph x="300" y ="200" {...testData} />
        </div>

      </div>
    );
  }
}

export default App;
