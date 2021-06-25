import React, {Component } from 'react';
import './colorBox.css';
import {blueChoice} from './helper';

class Bboxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: blueChoice()
        }
    }
    pickColor = () =>{
        let newColor;
        do{
            newColor = blueChoice();
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
 
export default Bboxes;