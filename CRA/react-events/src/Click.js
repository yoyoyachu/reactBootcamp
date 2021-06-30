import React, {Component } from 'react';

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isToggleOn: false,
        }
        this.clickEvent = this.clickEvent.bind(this)

    }
    clickEvent(){
        this.setState(prevState=>({
            isToggleOn: !prevState.isToggleOn,
        }))
    }
    syntheticE = (e)=>{
        console.log(this)
    }
    toggleEvent = (e)=>{
        this.setState(prevState=>({
            isToggleOn: !prevState.isToggleOn,
        }))
    }
    render() { 
        return (  
            <div>
                <button onToggle={this.toggleEvent}>{(this.state.isToggleOn) ? 'Hi' : 'Bye'}</button>
                <button onClick={this.clickEvent}>{(this.state.isToggleOn) ? 'On' : 'Off'}</button>
                <button onClick={this.syntheticE}>hi</button>
            </div>
        );
    }
}
 
export default Click;