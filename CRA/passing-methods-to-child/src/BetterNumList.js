import React, {Component } from 'react';
import BetterNumItem from './BetterNumItem'

class BetterNumList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            nums: [1,2,3,4,5]
        }
        this.remove = this.remove.bind(this)
    }
    remove(num){
        console.log('REMOVING '+num )
        this.setState(prevState =>({
            nums: prevState.nums.filter(n=> n !== num)
        }))
    }
    render() { 
        let nums =this.state.nums.map(n =><BetterNumItem value={n} remove={this.remove}/>);
        return (
            <div>
                <h1>Better number list: </h1>
                <ul>{nums}</ul>
            </div>  
        );
    }
}
 
export default BetterNumList;
