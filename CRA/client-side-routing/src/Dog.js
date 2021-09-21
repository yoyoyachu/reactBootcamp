import React, {Component} from "react";

class Dog extends Component {
    componentDidMount(){
        console.log('component did mount')
      }
      componentWillUnmount(){
        console.log('component will unmount')
      }
    render() { 
        console.log('rendering component')
        return (  
            <div>
                <h1>Dog</h1>
                <h2>My dog name is: {this.props.dogname}</h2>
                <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt=""/>
            </div>
        );
    }
}
 
export default Dog;