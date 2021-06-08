function getNum(){
    return (Math.floor(Math.random() * 10) +1) ;
}
class NumPicker extends React.Component{
    render(){
        const num = getNum();
        let msg;
        if(num ===4){
            msg = <div>
                <img src="https://media.tenor.com/images/5c6f3b22d0c9653ddbdaaf93522e0330/tenor.gif" alt="" />
                <p>Congratulations  !</p>
            </div>
        }else{
            msg = <p>Unlucky  !</p>
        }
        return(
            <div>
                <h1>Your number is:  {num}</h1>
                {msg}            
            </div>
        )
    }
}
ReactDOM.render(<NumPicker />, document.getElementById('root'));

