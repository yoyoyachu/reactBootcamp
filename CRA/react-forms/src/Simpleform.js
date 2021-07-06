import React, {Component } from 'react';

class Simpleform extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(evt){
        console.log(this.state.username)
        this.setState({username: evt.target.value})
    }
    handleSubmit(evt){
        evt.preventDefault()
        alert(`your username is ${this.state.username}`)
        this.setState({username: ''})
    }
    render() { 
        return (  
            <div>
                <h1>Simple Form</h1>
                <form id='nameForm'>
                <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Simpleform;