import React,{Component} from 'react';
class Randomnum extends Component{
    constructor(props){
        super(props);
        this.state = {
            score : 0,
            gameOver: false
        }
        this.makeTimer();
    }
    makeTimer(){
        setInterval(()=>{
            let randNum = this.state.score + 1;
            this.setState({score:randNum})
        },1000)
    }
    render(){
        return(
            <div>
                <h1>{this.state.score}</h1>
            </div>
        )
    }
}

export default Randomnum;