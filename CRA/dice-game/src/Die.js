import React,{Component} from 'react';
import './Die.css';
class Die extends Component {
    render() { 
        let diceClass = `Die  fas fa-dice-${this.props.face} ${this.props.rolling &&
            "shaking"}`;
        return (  
            <div>
                <i className={diceClass}></i>
            </div>
        );
    }
}
 
export default Die;



