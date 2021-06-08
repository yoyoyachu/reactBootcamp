class App extends React.Component{
    render(){
        return(
            <div >
                <Hello />
                <Numpicker />
                <Goodbye />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


