import React, {Component } from 'react';
import axios from 'axios';
import './ZenQuote.css'
class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ques: '' ,
            ans: '',
            isLoaded: false
        }
    }
    componentDidMount(){
        //load data  https://api.github.com/zen
        axios.get('https://official-joke-api.appspot.com/random_joke').then((response)=>{
            setTimeout(
                function(){
                    this.setState({ques: response.data.setup, ans: response.data.punchline,isLoaded:true})
                }.bind(this),6000
            )
        })
    }
    render() {
        let result;
        if(!this.state.isLoaded){
            result = <div className="loader">
                        <div className="loader-inner">
                            <div className="loader-line-wrap">
                                <div className="loader-line"></div>
                            </div>
                            <div className="loader-line-wrap">
                                <div className="loader-line"></div>
                            </div>
                            <div className="loader-line-wrap">
                                <div className="loader-line"></div>
                            </div>
                            <div className="loader-line-wrap">
                                <div className="loader-line"></div>
                            </div>
                            <div className="loader-line-wrap">
                                <div className="loader-line"></div>
                            </div>
                        </div>
                    </div>
        }else{
            result = <div>
                <h1>{this.state.ques} </h1>
                <h2>{this.state.ans}</h2>
            </div>
        }
        return (  
            <div>{result}</div>
        );
    }
}
 
export default ZenQuote;


