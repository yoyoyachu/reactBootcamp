import React,{Component} from 'react';

class Clickevent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Yachna',
            clicked:false
        };
        //add below line only when not using arrow fn
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({name:'Rishiraj',clicked:true})
    }
    render(){ 
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.handleClick}>
                    Click me!
                </button>
            </div>
            
        );
    }
}
 
export default Clickevent;