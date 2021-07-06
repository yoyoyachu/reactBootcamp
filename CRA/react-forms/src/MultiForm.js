import React, {Component } from 'react';

class MultiForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username : '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }
    handleSubmit(evt){
        evt.preventDefault()
        this.setState({username: '',email:'',password:''})
    }
    render() { 
        return (  
            <div>
                <h1>Multi form</h1>
                <form id='nameForm'>
                <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                    <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="text" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default MultiForm;