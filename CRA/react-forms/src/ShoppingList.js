import React, {Component } from 'react';
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuid } from 'uuid';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            items: [
                {name: 'bread', qty: '1 packet', id: uuid()},
                {name: 'eggs', qty: '5 dozen',id: uuid()}
            ]
        }
        this.renderitem = this.renderItem.bind(this)
        this.addItem = this.addItem.bind(this)

    }
    addItem(item){
        let newItem = {...item, id: uuid()}
        this.setState(prevState=>({
            items: [...prevState.items,newItem]
        }))
    }
    renderItem(){
        return(
        <ul>
            {this.state.items.map(item=>(
                <li key={item.id}>{item.name} : {item.qty}</li>
            ))}
        </ul>
        )   
    }
    render() { 
        return (  
            <div>
                <h1>Shopping List</h1>
                {this.renderItem()}
                <ShoppingListForm  addItem={this.addItem}/>
            </div>
        );
    }
}
 
export default ShoppingList;