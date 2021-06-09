class Hello extends React.Component{
    render(){
        const {to,from}= this.props;
        return(
            <div>
                <h2>Hello {to} from {from}</h2>
            </div>
        )
    }
}