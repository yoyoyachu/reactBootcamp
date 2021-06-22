import React,{Component} from 'react';
import Coin from './Coin'
class CoinFlipper extends Component {
    static defaultProps = {
        // sidesArr:['https://tinyurl.com/react-coin-heads-jpg','https://tinyurl.com/react-coin-tails-jpg']
        sidesArr : ['https://raw.githubusercontent.com/JS-Beginners/coin-toss-game-2/master/heads.png','https://github.com/JS-Beginners/coin-toss-game-2/blob/master/tails.png?raw=true']
    }
    constructor(props) {
        super(props);
        this.state = {  
            side: '',
            head: 0,
            tail: 0
        }
    }
    sides = ()=>{
        const idx = Math.floor(Math.random()*2);
        (idx === 0) ? this.setState({head: this.state.head + 1}) : this.setState({tail: this.state.tail + 1})
        const oneSide = this.props.sidesArr[idx];
        this.setState({side: oneSide})
    }
    render() { 
        return (  
            <div>
                <Coin side={this.state.side}/>
                <button onClick={this.sides}>Flip Me!</button>
                <h3>Out of {this.state.head + this.state.tail} flips, there have been {this.state.head} heads & {this.state.tail} tails.</h3>
            </div>
        );
    }
}
 
export default CoinFlipper;
