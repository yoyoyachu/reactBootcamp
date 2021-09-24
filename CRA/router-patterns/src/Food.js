import React, {Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Food.css';
class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const name = this.props.match.params.name
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        if(/\d/.test(name)) this.props.history.push("/notfound");
        return (  
            <div>
                {/\d/.test(name) ? (
                <Redirect to='/notfound'/>
                ) : (
                    <div> 
                    <h1>I love to eat {name}</h1>
                    <img src={url} alt={name} />
                    </div>
                )}  
            </div>
        );
    }
}
 
export default Food;