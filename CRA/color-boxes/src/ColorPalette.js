import React, {Component } from 'react';
import './colorPalette.css';
// import ColorBox from './ColorBox';
import Rboxes from './Rboxes';
import Gboxes from './Gboxes';
import Bboxes from './Bboxes';

class ColorPalette extends Component {
    static defaultProps = {
        numOfBoxesR : 4,
        numOfBoxesG : 4,
        numOfBoxesB : 4
    }
    constructor(props) {
        super(props);
        this.state = {  
        }
    }
    render() { 
        const Redboxes = Array.from({length: this.props.numOfBoxesR}).map(m=><Rboxes />)
        const Greenboxes = Array.from({length: this.props.numOfBoxesG}).map(m=><Gboxes />)
        const Blueboxes = Array.from({length: this.props.numOfBoxesB}).map(m=><Bboxes />)
        return (
            <div className="container">
                <div className="color-palette-container">
                    {Redboxes}{Greenboxes}{Blueboxes}
                </div>
            </div>  
        );
    }
}
 
export default ColorPalette;