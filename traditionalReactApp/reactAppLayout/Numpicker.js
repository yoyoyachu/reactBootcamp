function getNum(){
    return Math.floor(Math.random() * 5) + 1;
}
class Numpicker extends React.Component{
    render(){
        let num = getNum();
        let img;
        if(num ===4){
            img = <div>
                <h3>Yeyyyy......Congratulations !</h3>
                <img src="https://media.tenor.com/images/5c6f3b22d0c9653ddbdaaf93522e0330/tenor.gif" alt="" />
            </div>
        }else if(num === 5){
            img = <div>
                <img src="https://media.tenor.com/images/7b3961335cb7647e2c46493f11cec3d0/tenor.gif" alt="" />
            </div>
        }else if(num === 1){
            img = <div>
                <img src="https://media1.tenor.com/images/bf0e7c9e4ec610c01703eed7f6a2b234/tenor.gif?itemid=10663231" alt="" />
            </div>
        }else{
            img = <div>
                <h3>Bad Luck !</h3>
                <img src="https://media.tenor.com/images/29ca2b407a458ebe1dfe7c16d0099065/tenor.gif" alt="" />
            </div>
        }
        return(
            <div>
                <p>Your number is: {num}</p>
                {img}
            </div>
        )
    }
}



