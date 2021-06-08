//class component
// class Welcome extends React.Component{
//     render(){
//         return(
//             <h1>My First Traditional React App </h1>
//         )
//     }
// }

//function component
// function Welcome(){
//     return(
//         <h1>My First Traditional React App </h1>
//     )
// }

//proper way of returning Jsx if we have more that one tags
// class Showimage extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Welcome There</h1>
//                 <img src="https://images.unsplash.com/photo-1623082277841-4aa305d8f04c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80" alt="" />
//             </div>
//         )
//     }
// }

// embedding js into jsx

class Fungram extends React.Component{
    render(){
        return(
            <div>
                <h1>Joke Of The Day</h1>
                <h2>its here :  {Getjokes()}</h2>
            </div>
        )
    }
}
function Getjokes(){
    const jokes = [
        'What is a witch’s favorite subject in school?.................Spelling!',
        'How does a vampire start a letter?..............Tomb it may concern...',
        'What is fast, loud and crunchy?.............A rocket chip!',
        'Why did the teddy bear say no to dessert?.................. Because she was stuffed.',
        'What has ears but cannot hear?...........A cornfield.'
    ]
    return jokes[Math.floor(Math.random() * jokes.length)];

}

// ReactDOM.render(<Welcome />, document.getElementById('root'));
// ReactDOM.render(<Showimage />, document.getElementById('root'));
ReactDOM.render(<Fungram />, document.getElementById('root'));


