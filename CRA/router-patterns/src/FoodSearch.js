import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FoodSearch extends Component{
    constructor(props){
        super(props);
        this.state = {query: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({query : e.target.value});
    }

    handleClick(e){
        alert('saved to db');
        this.props.history.push(`/food/${this.state.query}`)
    }
    render(){
        return(
            <div className="Meal">
                <h1>Search For A Food</h1>
                <input type="text" placeholder="Search For A Food" value={this.state.query} onChange={this.handleChange}  />
                {/* Client side redirect (two ways: 1 is to use redirect tag - 2 is to use history.push('/routeName') */}
                <Link to={`food/${this.state.query}`}>Search</Link>
                {/* use 1 or 2 */}
                <button onClick={this.handleClick}>Save to DB</button>
            </div>
        )
    }
}

export default FoodSearch;