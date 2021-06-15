class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                {/* passing num in curly braces */}
                <Hello to="Niyati" from="Ranaaaaaa" star={10} img = "https://images.unsplash.com/photo-1623659993452-f21da4754e5e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))