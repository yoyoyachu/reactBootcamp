class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <Hello data={['yachna','rishi','niyati','ruchi','rinku']} />
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))