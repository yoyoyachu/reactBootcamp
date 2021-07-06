import React, {Component } from 'react';
import Box from './Box'
import Boxform from './Boxform'


class Boxlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.createBox = this.createBox.bind(this)
    }
    createBox(styleObj){
        this.setState({
            boxes: [...this.state.boxes, styleObj]
        })
    }
    removeBox(id){
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    render() { 
        const boxes = this.state.boxes.map(box=>(
            <Box key={box.id} id={box.id} height={box.height} width={box.width} color={box.color} removeBox={()=> this.removeBox(box.id)}/>
        ))
        return (  
            <div>
                <h1>Color box maker</h1>
                {boxes}
                <Boxform createBox={this.createBox}/>
            </div>
        );
    }
}
export default Boxlist;