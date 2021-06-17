import React,{Component} from 'react';

class Toggleclick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'yachna',
            clicked:false
        };
        //add below line only when not using arrow fn
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick =(e) =>{
        if(this.state.name === 'yachna'){
            this.setState({name:'rishi',clicked:true});
        }else{
            this.setState({name:'yachna',clicked:false});
        }
    }
    render(){ 
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.handleClick}>
                    {this.state.clicked ? 'Clicked!' : 'Click me!'}
                </button>
                
            </div>
            
        );
    }
}
 
export default Toggleclick;