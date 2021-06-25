import React,{Component} from 'react';
import LottoBall from './LottoBall';
import './Lottery.css';
class Lottery extends Component {
    static defaultProps = {
        maxNum:70,
        title: "Lottery",
        maxBalls:6
    }
    constructor(props) {
        super(props);
        this.state = {  
            nums:(Array.from({length:this.props.maxBalls}))
        }
    }
    generate =()=>{
        this.setState(curState=>({
            nums: curState.nums.map(n=>
                Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }))
    }
    handleClick = ()=>{
        this.generate();
    }
    render() { 
        return (  
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>Balls Go Here!</div>
                <div className="LottoBll">
                    {this.state.nums.map(n=><LottoBall num={n}/>)}
                </div>
                <button onClick={this.handleClick}>Click me</button>
            </section>
        );
    }
}
export default Lottery;
