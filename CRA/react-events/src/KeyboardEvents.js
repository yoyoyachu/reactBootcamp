import React, {Component } from 'react';

class KeyboardEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isToggleOn: false,
        }

    }
    // fires when any key is released, fires last, and the browser processes the key.
    keyupEvent = (e)=>{
        alert('key up!!!')
    }
    // fires when any key is pressed down, fires first, and always before the browser processes the key (e.g. inserting text, moving focus, etc).
    keydownEvent = (e)=>{
        alert('key down!!!')
    }
    //fires when a key that produces a character value is pressed down, fires after keydown, and before the browser processes the key.
    keyPress = (evt)=>{
        if(evt.keyCode === 56){
            alert('you pressed enter key')
        }else{
            alert('BOOO!!!!')

        }

    }
    render() { 
        return (  
            <div>
                <div>
                    <label htmlFor="keyEvent1">keyUp</label>
                    <textarea id="keyEvent1"  cols="10" rows="1" onKeyUp={this.keyupEvent} ></textarea>
                </div>
                
            <div>
                <label htmlFor="keyEvent1">keyDown</label>
                <textarea id="keyEvent2"  cols="10" rows="1" onKeyDown={this.keydownEvent} ></textarea>
            </div>
                
            <div>
                <label htmlFor="keyEvent1">keyPress</label>
                <textarea id="keyEvent3"  cols="10" rows="1"  onKeyPress={this.keyPress}></textarea>
            </div>
            </div>
        );
    }
}
export default KeyboardEvents;