class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <Hello to="Rishi" from="Yachna" />
                <Hello to="Niyati" from="Mummy" />
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))