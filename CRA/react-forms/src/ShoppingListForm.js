import React, {Component } from 'react';

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: '',
            qty: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.addItem(this.state)
        this.setState({name:'',qty:''})
    }
    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
    }
    render() { 
        return (  
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name of product: </label>
                <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
                <label htmlFor="qty">Quantity: </label>
                <input type="text" name="qty" id="qty" onChange={this.handleChange} value={this.state.qty}/>
                <button>Submit</button>
            </form>
        );
    }
}
 
export default ShoppingListForm;