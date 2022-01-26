import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: "#FFF",
      // storing the color of the Child in the parent so both children can have access to the data
      // the parent component will handle passing the data to each child component 
    }
  }

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor,
      // since we are also changing the color of the children, we are sending data back to the parent
    });
  };

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
    // since the data that represents the color of the children components lives in the parent, you pass that data down as props
  }
}

export default Parent
