import React,{Component} from 'react';
import  './LottoBall.css'

class LottoBall extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    createColor = ()=>{
        const r = Math.floor(Math.random()* 255);
        const g = Math.floor(Math.random()* 255);
        const b = Math.floor(Math.random()* 255);
        const a =  Math.random().toFixed(1) ;

        return `rgba(${r}, ${g}, ${b},${a})`;
    }
    generateColor = ()=>{
        this.createColor();
    }
    render() { 
        const divStyle = {
            color: 'magenta',
            backgroundColor: this.createColor(),
          };
        return (  
            <div>
                <div className="LottoBall" style={divStyle}>{this.props.num}</div>
            </div>
        );
    }
}
export default LottoBall;
