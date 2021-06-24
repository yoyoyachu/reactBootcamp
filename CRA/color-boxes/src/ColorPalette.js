import React, {Component } from 'react';
import './colorPalette.css';
import ColorBox from './ColorBox'

class ColorPalette extends Component {
    static defaultProps = {
        numOfBoxes : 16
    }
    constructor(props) {
        super(props);
        this.state = {  
        }
    }
    render() { 
        return (  
            <div className="color-palette-container">
                {this.state.nums.map(n=><ColorBox />)}
            </div>
        );
    }
}
 
export default ColorPalette;