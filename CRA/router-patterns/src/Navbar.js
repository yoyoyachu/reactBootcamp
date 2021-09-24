import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class FoodSearch extends Component{
    constructor(props){
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        alert('logged you in...');
        this.props.history.push(`/food/cake`)
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Log In</button>
                <button onClick={this.props.history.goBack}>Go Back</button>
                <button onClick={this.props.history.goForward}>Go Forward</button>

            </div>
            
        )
    }
}

export default withRouter(FoodSearch);