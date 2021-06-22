import React,{Component} from 'react';
import Coin from './Coin'
import './coinFlipper.css'
class CoinFlipper extends Component {
    
    static defaultProps = {
        // sidesArr:['https://tinyurl.com/react-coin-heads-jpg','https://tinyurl.com/react-coin-tails-jpg']
        sidesArr : ['https://raw.githubusercontent.com/JS-Beginners/coin-toss-game-2/master/heads.png','https://github.com/JS-Beginners/coin-toss-game-2/blob/master/tails.png?raw=true']
    }
    constructor(props) {
        super(props);
        this.state = {  
            sideImg: 'https://media0.giphy.com/media/f9qwUQW56qC7BeCfCM/giphy.gif?cid=ecf05e47n93aitwrcqab3teqhjpbyunp2qm2jc8an08ixi4j&rid=giphy.gif&ct=g',
            head: 0,
            tail: 0,
            player: null,
            computer: null,
            playerScore: 0,
            computerScore: 0,
            announceMsg: ''
        }
    }
    
    
    playerHeads = () =>{
        const idx = Math.floor(Math.random()*2);
        this.setState({computer: idx})
        this.setState({player: 0})
    }
    playerTails = () =>{
        const idx = Math.floor(Math.random()*2);
        this.setState({computer: idx})
        this.setState({player: 1})
    }
    sides = ()=>{
        const idx = Math.floor(Math.random()*2);
        (idx === 0) ? this.setState({head: this.state.head + 1}) : this.setState({tail: this.state.tail + 1})
        const oneSide = this.props.sidesArr[idx];
        this.setState({sideImg: oneSide,player:null,computer:null});

        if(this.state.computer === idx && this.state.player === idx){
            this.setState({announceMsg:"It's a tie"})
        }else if(this.state.computer === idx){
            this.setState({computerScore: this.state.computerScore+1,announceMsg:'Point goes to computer'})
        }else if(this.state.player === idx  ){
            this.setState({playerScore: this.state.playerScore+1,announceMsg:'Point goes to player'})
        }

        if(this.state.player >= 2){
            this.setState({winMsg:'You won the game',playerScore:0,computerScore:0})
        }
        if(this.state.computerScore >= 2){
            this.setState({winMsg:'You lose',playerScore:0,computerScore:0})
        }
        if(this.state.playerScore >= 2 && this.state.computerScore >=2 ){
            this.setState({winMsg:"It's a tie",playerScore:0,computerScore:0})
        }
    }
    playAgain= ()=>{
        this.setState({sideImg: 'https://media0.giphy.com/media/f9qwUQW56qC7BeCfCM/giphy.gif?cid=ecf05e47n93aitwrcqab3teqhjpbyunp2qm2jc8an08ixi4j&rid=giphy.gif&ct=g',playerScore:0,computerScore:0,player:null,computer:null,announceMsg:'',winMsg:''})
    }
    render() { 
        let playerTitle,computerTitle
        if(this.state.player === 0){
            playerTitle = 'Heads';
        }else if(this.state.player === 1){
            playerTitle = 'Tails';
        }

        if(this.state.computer === 0){
            computerTitle = 'Heads';
        }else if(this.state.computer === 1){
            computerTitle = 'Tails';
        }

        return (
            <div className="container">
                <h1 className="text-center p-5">First Player to 3 Points Win!</h1>
                <h1>{this.state.winMsg}</h1>
                <div className="card">
                    <Coin side={this.state.sideImg} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.announceMsg}</h5>
                        <p className="card-text"></p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="playerComputerLI list-group-item">
                            <ul className="playerUL">
                            Player:
                                <li>{this.state.playerScore}</li>
                                <li>{playerTitle}</li>
                            </ul>  
                            <ul className="playerUL">
                            Computer:
                                <li>{this.state.computerScore}</li>
                                <li>{computerTitle}</li>
                            </ul>                           
                        </li>
                        
                        

                    </ul>
                    <div className="card-body">
                    <button onClick={this.playerHeads} className="card-link">Heads</button>
                    <button onClick={this.playerTails} className="card-link">Tails</button>
                    </div>
                    <div className="card-body">
                    <button onClick={this.sides} className="card-link">Flip Me!</button>
                    <button onClick={this.playAgain} className="card-link">Play Again</button>
                    </div>
                </div>
            </div>
            
            












            // <div>
            //     <h1>{this.state.winMsg}</h1>

            //     <h1>{this.state.announceMsg}</h1>
                
            //     <div>
            //         <h2>Player selected: {playerTitle}</h2>
            //         <h2>Computer selected: {computerTitle}</h2>
            //     </div>
                
            //     <Coin side={this.state.sideImg}/>
            //     <div>
            //     <button onClick={this.playerHeads} className="card-link">Heads</button>
            //     <button onClick={this.playerTails} className="btn btn-warning">Tails</button>
            //     </div>
            //     <button onClick={this.sides} className="btn btn-success">Flip Me!</button>
            //     <button onClick={this.playAgain} className="btn btn-danger">Play Again</button>


            //     <div>
            //         <h3>Player Score: {this.state.playerScore}</h3>
            //         <h3>computer Score: {this.state.computerScore}</h3>

            //     </div>
                
            // </div>
        );
    }
}
 
export default CoinFlipper;
