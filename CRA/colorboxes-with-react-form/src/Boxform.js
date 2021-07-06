import React, {Component } from 'react';
import {v4 as uuid} from 'uuid';

class Boxform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            color: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        let newBox = {...this.state, id: uuid()}
        this.props.createBox(newBox)
        this.setState({height:'',width:'',color:''})
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    render() { 
        return (  
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">Height: </label>
                <input type="text" name="height" id="height" onChange={this.handleChange} value={this.state.height}/>
                <label htmlFor="width">Width: </label>
                <input type="text" name="width" id="width" onChange={this.handleChange} value={this.state.width}/>
                <label htmlFor="color">Background-Color: </label>
                <input type="text" name="color" id="color" onChange={this.handleChange} value={this.state.color}/>
                <button>Submit</button>
            </form>
        );
    }
}
export default Boxform;