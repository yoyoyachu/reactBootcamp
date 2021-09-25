import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg'
import hazel from './images/hazel.jpg'
import DogDetails from './DogDetails';
import Routes from './Routes';
import DogList from './DogList';
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
      }
    ]
  }
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let getDog = props =>{
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails dog={currentDog} {...props}/>
    }
    return (
      <div className = 'App'>
        <Navbar dogs={this.props.dogs}/>
        <Switch>
          <Route exact path="/dogs" render={()=><DogList dogs={this.props.dogs}/>}/>
          <Route exact path="/dogs/:name" render={getDog}/>
        </Switch>
      </div>
    );
  }
}

export default App;

