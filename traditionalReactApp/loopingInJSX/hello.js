class Hello extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div>
                {data.map(m=><h2>Hello {m}</h2>)}
            </div>
        )
    }
}