import React, {Component } from "react";
import './App.css';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

class App extends Component {
  render() { 
    return (  
      <div className="App">
        <About />
        <Dog />
        <Contact />
      </div>
    );
  }
}
 
export default App;