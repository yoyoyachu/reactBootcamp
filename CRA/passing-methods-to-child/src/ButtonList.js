import React, {Component } from 'react';
import './ButtonList.css'
class ButtonList extends Component {
    static defaultProps = {
        color:['violet','green','orange','pink','purple','yellow','gray','red','brown','blue']
    }
    constructor(props) {
        super(props);
        this.state = {  
            color: 'cyan'
        }
        // this.changeBackground = this.changeBackground.bind(this);
    }
    changeBackground(newColor){
        this.setState({color: newColor})
    }
    render() { 
        return (  
            <div className="btn-container"  style={{backgroundColor : this.state.color}}>
                {this.props.color.map(c=>{
                    const styleObj = {backgroundColor: c}
                    return <button onClick={this.changeBackground.bind(this,c)} className="btn"   style={styleObj}>Click on me!</button>
                })}
            </div>
        );
    }
}
 
export default ButtonList;