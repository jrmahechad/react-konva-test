import React from 'react';
import {Layer,  Stage,  Wedge,Text} from 'react-konva';
import Konva from 'konva';

export default class PolarGraph extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = {
      red : '#ED1D24',
      white : 'white',
    };
  }

  getFourDPValues (){
    console.log(this.props)
    if(this.props.status === "ok"){
        //TODO calculations
      return {
        fiveSec: 80,
        oneMin: 70,
        fiveMin :40,
        twentyMin : 60,
        twentyMinValue: this.props.power20m.value
      };
    }

    return {}

  }

  render () {

    const maxRadious = 110;
    const fourDPValues = this.getFourDPValues();
    const levelsRadious = [27.5,55,82.5,110];
    const basicProperties = {
      x:this.props.x || 220,
      y:this.props.y || 220,
      fill:this.state.red
    }
    const levelProperties = {
      stroke: this.state.white,
      fill : 'transparent',
      strokeWidth: 1,
      opacity : 0.3,
      angle : 180,
      rotation: 180
    }
    const properties5SecText = {
      x: basicProperties.x-100,
      y : basicProperties.y-15,
      text : "5 SEC (NM)",
      fill : this.state.white,
      fontSize : 10,
      fontStyle:'bold'
    }
    const properties1MinText = {
      x: basicProperties.x-30,
      y : basicProperties.y-100,
      text : "1 MIN (AC)",
      fill : this.state.white,
      fontSize : 10,
      fontStyle:'bold'
    }
    const properties5MinText = {
      x: parseInt(basicProperties.x,10)+40,
      y : basicProperties.y-15,
      text : "5 MIN (MAP)",
      fill : this.state.white,
      fontSize : 10,
      fontStyle:'bold'
    }
    const properties20MinText = {
      x: basicProperties.x-30,
      y : parseInt(basicProperties.y,10)+20,
      text : "20 MIN (FTP)",
      fill : this.state.white,
      fontSize : 10,
      fontStyle:'bold'
    }
    const propertiesExceptionalText = {
      x: parseInt(basicProperties.x,10)+60,
      y : basicProperties.y-100,
      text : "Exceptional",
      fill : this.state.white,
      fontSize : 8,
      opacity : 0.5,
    }
    const propertiesVeryGoodText = {
      x: parseInt(basicProperties.x,10)+46,
      y : basicProperties.y-76,
      text : "Very Good",
      fill : this.state.white,
      fontSize : 8,
      opacity : 0.5,
    }
    const propertiesGoodText = {
      x: parseInt(basicProperties.x,10)+32,
      y : basicProperties.y-52,
      text : "Good",
      fill : this.state.white,
      fontSize : 8,
      opacity : 0.5,
    }
    const propertiesNeedsImprovementText = {
      x: parseInt(basicProperties.x,10)+20,
      y : basicProperties.y-30,
      text : "NeedsImprovement",
      fill : this.state.white,
      fontSize : 8,
      opacity : 0.5,
    }
    const propertiesFTPText = {
      x: basicProperties.x-20,
      y : parseInt(basicProperties.y,10)+30,
      fill : this.state.white,
      fontSize : 20,
      strokeWidth:5,
      fontStyle:'bold',
      text : fourDPValues.twentyMinValue
    }

    return (
      <Stage width={700} height={700}>
          <Layer>
            <Wedge {... basicProperties} radius={fourDPValues.twentyMin} angle="180" />
            <Wedge {... basicProperties} radius={fourDPValues.fiveMin} angle="60" rotation="-60" />
            <Wedge {... basicProperties} radius={fourDPValues.oneMin} angle="60" rotation="-120" />
            <Wedge {... basicProperties} radius={fourDPValues.fiveSec} angle="60" rotation="-180" />
            <Wedge {... basicProperties} radius={levelsRadious[0]} {... levelProperties}/>
            <Wedge {... basicProperties} radius={levelsRadious[1]} {... levelProperties}/>
            <Wedge {... basicProperties} radius={levelsRadious[2]} {... levelProperties}/>
            <Wedge {... basicProperties} radius={levelsRadious[3]} {... levelProperties} opacity="1"/>
            <Wedge {... basicProperties} radius={levelsRadious[3]} {... levelProperties} opacity="1" angle="60" rotation="240"/>

            <Text {... properties5SecText} />
            <Text {... properties1MinText}/>
            <Text {... properties5MinText}/>
            <Text {... properties20MinText}/>

            <Text {... propertiesExceptionalText}/>
            <Text {... propertiesVeryGoodText}/>
            <Text {... propertiesGoodText}/>
            <Text {... propertiesNeedsImprovementText}/>
            <Text {... propertiesFTPText}/>




          </Layer>
        </Stage>
    );

  }
}
