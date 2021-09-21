import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Chips from './Chips';
import Soda from './Soda';
import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Navbar from './Navbar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={()=> <VendingMachine/>} />
          <Route exact path="/soda" render={()=> <Soda/>} />
          <Route exact path="/chips" render={()=> <Chips/>} />
          <Route exact path="/sardines" render={()=> <Sardines/>} />
        </Switch>
      </div>
    );
  }
}
export default App;
