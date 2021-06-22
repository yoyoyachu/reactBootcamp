import React,{Component} from 'react';
import  './LottoBall.css'

class LottoBall extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return (  
            <div>
                <div className="LottoBall">{this.props.num}</div>
            </div>
        );
    }
}
 
export default LottoBall;
