import React, {Component } from 'react';
import './colorBox.css';
import {redChoice} from './helper';

class Rboxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: redChoice(),
        }
    }
    pickColor = () =>{
        let newColor;
        do{
            newColor = redChoice();
        }while(newColor === this.state.color);

        this.setState({color : newColor})
    }
    handleClick = ()=>{
        this.pickColor();
    }
    render() { 
        
        return (  
            <div>
                <p>{this.state.color}</p>
                <div style={{backgroundColor:this.state.color}} onClick={this.handleClick} className="color-box"></div>
            </div>
        );
    }
}
 
export default Rboxes;