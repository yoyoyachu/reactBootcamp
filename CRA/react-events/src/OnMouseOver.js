
import React, {Component } from 'react';

class OnMouseOver  extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isToggleOn: false,
        }
    }
    mouseOverEvent = (e)=>{
        alert('mouse over!!!')
    }
    mouseLeaveEvent = (e)=>{
        alert('mouse leave!!!')
    }
    onSelectEvent = (e)=>{
        alert('select me')
    }
    render() { 
        return (  
            <div>
                <p onMouseOver={this.mouseOverEvent} onMouseLeave={this.mouseLeaveEvent} >mouse over me </p>
                <input onSelect={this.onSelectEvent} type="text" name="" id="" />
            </div>
            
        );
    }
}
export default OnMouseOver ;