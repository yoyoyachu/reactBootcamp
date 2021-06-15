class Hello extends React.Component{
    static defaultProps = {
        to : "India",
        from : "USA"
    }
    render(){
        const {to,from}= this.props;
        let msgColor;
        if(to === 'Yachna'){
            msgColor=true
        }else{
            msgColor=false
        }
        return(
            <div  className = "Hello">
                <h2 className={msgColor ? 'greenC' : 'redC'}>Hello {to} from {from}</h2>
            </div>
        )
    }
}