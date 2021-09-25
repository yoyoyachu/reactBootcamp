import React, { Component } from 'react';
import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg'
import hazel from './images/hazel.jpg'
import Routes from './Routes';
import Navbar from './Navbar'
import './App.css';




class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      },
      {
        name: "Tangu",
        age: 9,
        src: whiskey,
        facts: [
          "Tango loves eating popcorn.",
          "Tango is a terrible guard dog.",
          "Tango wants to cuddle with you!"
        ]
      }
    ]
  }
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className = 'App'>
        <Navbar dogs={this.props.dogs}/>
        <div className="container">
        <Routes dogs={this.props.dogs}/>
        </div>
      </div>
    );
  }
}

export default App;

