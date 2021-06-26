import React, {Component } from 'react';

class FocusEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isToggleOn: false,
        }

    }
    onfocusEvent = (e)=>{
        console.log('on focus')
    }
    onblurEvent = (e)=>{
        alert('on blur!!!')
    }
    
    render() { 
        return (  
            <div>
                <label htmlFor="onfocus">onFocus</label>
                <textarea id="onfocus" onFocus={this.onfocusEvent}  cols="30" rows="1" ></textarea>
                <label htmlFor="onblur">onBlur</label>
                <textarea id="onblur" onBlur={this.onblurEvent}  cols="30" rows="1" ></textarea>
            </div>
            
        );
    }
}
export default FocusEvents;