class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                {/* passing num in curly braces */}
                <Hello to="Rishi" from="Yachna" star={100}/>
                <Hello to="Niyati" from="Rana" />
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))