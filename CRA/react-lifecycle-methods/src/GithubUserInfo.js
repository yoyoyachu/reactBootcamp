import React, {Component } from 'react';
import axios from 'axios'
class GithunUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            imgUrl:'',
            name: ''
        }
    }
    async componentDidMount(){
        //https://developer.linkedin.com/docs/rest-api
        const url = `https://api.github.com/users/${this.props.username}`;
        let res = await axios.get(url)
        let data = res.data;
        console.log(res.data)
        this.setState({imgUrl:data.avatar_url, name: data.name})
    }
    render() { 
        return (  
            <div>
                <h1>Github User Info</h1>
                <p>Name: {this.state.name}</p>
                <img src={this.state.imgUrl} alt="" />
            </div>
        );
    }
}
 
export default GithunUserInfo;