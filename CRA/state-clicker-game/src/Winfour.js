import React,{Component} from 'react'

class Winfour extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            num : 0
        }
    }
    getRandomNum = () =>{
        let randNum = Math.floor(Math.random() * 10);
        this.setState({num: randNum});
    }
    render() { 
        return (  
            <div>
                <h1>Number is {this.state.num}</h1>
                {(this.state.num === 4) ? <h2>You Win</h2> : <button onClick={this.getRandomNum}>Random Number</button>}
                
            </div>
        );
    }
}

export default Winfour;