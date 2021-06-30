

import React, {Component } from 'react';

class BetterNumItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log('In child component' + e)
        this.props.remove(this.props.value)
    }
    render() { 
        return (  
            <div>
                <p>{this.props.value}</p>
                <button onClick={this.handleClick}>X</button>
            </div>
        );
    }
}
 
export default BetterNumItem;