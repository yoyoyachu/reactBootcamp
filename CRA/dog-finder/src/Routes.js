import React,{Component} from 'react';
import {Link,Switch,Route, Redirect} from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';
import './Routes.css';

class Routes extends Component {
    render() { 
        let getDog = props =>{
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(
              dog => dog.name.toLowerCase() === name.toLowerCase()
            );
            return <DogDetails dog={currentDog} {...props}/>
          }
        return (  
            <Switch>
            <Route exact path="/dogs" render={()=><DogList dogs={this.props.dogs}/>}/>
            <Route exact path="/dogs/:name" render={getDog}/>
            <Redirect to="/dogs"/>
          </Switch>
        );
    }
}

export default Routes;