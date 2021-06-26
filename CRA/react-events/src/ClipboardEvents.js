import React, {Component } from 'react';

class ClipboardEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isToggleOn: false,
        }

    }
    copyEvent = (e)=>{
        alert('Dont Copy My Stuff!!!')
    }
    cutEvent = (e)=>{
        alert('cut cut cut!!!')
    }
    pasteEvent = (e)=>{
        alert('Copying my stuff and pasting on ur page!!!....not cool')
    }
    render() { 
        return (  
            <div>
                <h2 onCopy={this.copyEvent} onCut={this.cutEvent} onPaste={this.pasteEvent}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus veniam vel fugit rerum saepe consequuntur placeat molestias id accusamus, consectetur blanditiis nulla nemo harum omnis iure inventore? Cumque reiciendis laudantium amet, eius eligendi facilis aspernatur repudiandae illo deleniti laboriosam corrupti sint libero neque. Sapiente quia aliquam a, necessitatibus laborum vitae. Ab odit, aperiam ducimus totam in ipsum repellat qui veritatis dolorum, esse eveniet odio possimus sapiente. Et, quos, tenetur cum, quisquam dolorem quas esse deleniti beatae ipsum ut inventore doloribus commodi? Quaerat ut atque temporibus asperiores culpa ducimus harum, iste, aliquid ad quam porro inventore corrupti veniam quibusdam. Modi, laborum!</h2>
                <label htmlFor="copyPaste">copyPaste</label>
                <textarea id="copyPaste"  cols="30" rows="10" onPaste={this.pasteEvent}></textarea>
            </div>
            
        );
    }
}
export default ClipboardEvents;