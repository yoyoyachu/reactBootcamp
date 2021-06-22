import React,{Component} from 'react'

class ImmutableState extends Component {
    static defaultProps = {
        options : [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
        ]
    }
    constructor(props) {
        super(props);
        this.state = {  
            icons : ['heart']
        }
    }
    addIcon = id=>{
        const idx = Math.floor(Math.random() * this.props.options.length);
        const icon = this.props.options[idx];
        this.setState({icons: [...this.state.icons, icon]})
    }
    render() { 
        const icons = this.state.icons.map(m => <i className={`fa fa-${m}`} />)
        return (  
            <div>
                <h1>{icons}</h1>
                <button onClick={this.addIcon}>Add Icon</button>
            </div>
        );
    }
}
 
export default ImmutableState;