import React, {Component } from 'react';

class NumberItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <p>{this.props.value}</p>
                <button onClick={this.props.remove}>X</button>
            </div>
        );
    }
}
 
export default NumberItem;