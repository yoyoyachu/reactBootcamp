import React, {Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            time: new Date()
        }
        // console.log('1. In Constructor')
    }
    componentDidMount(){
        // console.log('2. in componentDidMount')
        this.timerId = setInterval(()=>{
            this.setState({time: new Date()})
        },1000)
    }
    render() { 
        // console.log('3. in render')
        return (  
            <div>
                <h1>Time is : {this.state.time.getSeconds()}</h1>
            </div>
        );
    }
}
 
export default Timer;