class Fruitmachine extends React.Component{
    render(){
        const {f1,f2,f3} = this.props;
        const result = (f1 === f2) && (f2 === f3);
            
        return(
            <div>
                <h2>{f1} {f2} {f3}</h2>
                <h3>{result ? 'You Win!!' : 'You Lose!!'}</h3>
            </div>
        )
    }
}