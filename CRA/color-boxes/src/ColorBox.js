import React, {Component } from 'react';
import './colorBox.css';
import {choice} from './helper';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: choice(),

        }
    }
    pickColor = () =>{
        let newColor;
        do{
            newColor = choice()
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
 
export default ColorBox;