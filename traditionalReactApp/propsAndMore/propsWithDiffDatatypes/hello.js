class Hello extends React.Component{
    render(){
        const {to,from}= this.props;
        const star = "!".repeat(this.props.star)
        return(
            <div>
                <h2>Hello {to} from {from}{star}</h2>
            </div>
        )
    }
}