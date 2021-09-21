import React, { Component } from "react";
import {Route, Switch, NavLink} from 'react-router-dom'
import './App.css';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

class App extends Component {

  render() { 
    return (  
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/yachna">Yachna</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink activeClassName="active-link" className="nav-link" exact  to="/">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active-link" className="nav-link" exact to="/dog/c">Dog(c)</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active-link" className="nav-link" exact to="/dog/r">Dog(r)</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active-link" className="nav-link" exact to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/dog/c" component={()=> <Dog dogname="puppy"/> }/>
          <Route exact path="/dog/r" render={()=> <Dog dogname="biscuits"/> }/>
        </Switch>
      </div>
    );
  }
}
 
export default App;