class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <Hello  to="Yachna"  from="Niyu"/>
                <Hello to="winner"  />

            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))