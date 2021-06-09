class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Slot Machines</h1>
                <Fruitmachine f1="🍏" f2="🍎" f3="🍎"/>
                <Fruitmachine f1="🍇" f2="🍇" f3="🍇"/>
                <Fruitmachine f1="🍏" f2="🍏" f3="🍏"/>
                <Fruitmachine f1="🍒" f2="🍇" f3="🍇"/>
                <Fruitmachine f1="🍎" f2="🍇" f3="🍒"/>
                <Fruitmachine f1="🍒" f2="🍒" f3="🍒"/>

            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))