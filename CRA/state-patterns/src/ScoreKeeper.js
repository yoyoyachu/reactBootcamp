import React,{Component} from 'react';

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            score: 0
        }
    }
    doubleKill = () =>{
        this.setState(st =>{
            return {score: st.score + 1};
        })
        this.setState(st =>{
            return {score: st.score + 1};
        })
    }
    incrementTwo = CurrentState =>{
        return {score: CurrentState.score +5}
    }
    doubleAdd = () =>{
        this.setState(this.incrementTwo)
    }
    trippleKill =async () =>{
        await this.setState({score: this.state.score + 1}) 
        await this.setState({score: this.state.score + 1}) 
        await this.setState({score: this.state.score + 1}) 
    }

    render() { 
        return ( 
            <div>
                <h2>Score is: {this.state.score}</h2>
                <button onClick={this.doubleKill}>Double Kill</button>
                <button onClick={this.doubleAdd}>DoubleAdd</button>
                <button onClick={this.trippleKill}>Tripple Kill</button>
            </div> 
            
        );
    }
}
 
export default ScoreKeeper;
