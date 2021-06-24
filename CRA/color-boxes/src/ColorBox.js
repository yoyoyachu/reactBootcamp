import React, {Component } from 'react';
import './colorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    }
    createColor = ()=>{
        const r = Math.floor(Math.random()* 255);
        const g = Math.floor(Math.random()* 255);
        const b = Math.floor(Math.random()* 255);
        const a =  Math.random().toFixed(1) ;

        return `rgba(${r}, ${g}, ${b},${a})`;
    }
    generateColor = ()=>{
        this.createColor();
    }
    changeColor = () =>{
        
    
          
    }
    render() { 
        
        return (  
            <div>
                <div onClick={this.changeColor} className="color-box"></div>
            </div>
        );
    }
}
 
export default ColorBox;