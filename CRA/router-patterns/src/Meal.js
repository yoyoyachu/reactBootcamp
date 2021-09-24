import React, {Component} from 'react';
import './Meal.css';

class Meal extends Component{
    render(){
        const {foodName, drinkName} = this.props.match.params;
        const foodurl = `https://source.unsplash.com/1600x900/?${foodName}`;
        const drinkurl = `https://source.unsplash.com/1600x900/?${drinkName}`;

        return(
            <div className="Meal">
                <h1>Hi I will eat {foodName} and drink {drinkName} Today.</h1>
                <img src={foodurl} alt="" />
                <img src={drinkurl} alt="" />
            </div>
        )
    }
}

export default Meal;