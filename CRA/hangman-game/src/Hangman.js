import React, { Component } from "react";
import "./Hangman.css";
import {randomWord} from './words';
import {img0,img1,img2,img3,img4,img5,img6} from './images'

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    alphabets: 'abcdefghijklmnopqrstuvwxyz',
    vowels: 'aeiou'
  };

  constructor(props) {
    super(props);
    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      answer: randomWord() 
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.restartBtn = this.restartBtn.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */

  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuess: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }))
    if(this.state.nWrong >= this.props.maxWrong || (this.guessedWord().join('') === this.state.answer)){
      this.setState({nWrong:0,guessed:new Set(),answer: randomWord()})
    }
  }
  // handleGuess(evt) {
  //   let ltr = evt.target.value;
  //   this.setState(st => ({
  //     guessed: st.guessed.add(ltr),
  //     nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
  //   }));
  // }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }
  // restart btn
  restartBtn(){
    this.setState({nWrong:0,guessed:new Set(),answer: randomWord()})
  }

  /** render: render game */
  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let altMsg = `${this.state.nWrong}/${this.props.maxWrong}`;
    let gameState = this.generateButtons();
    if (isWinner) gameState = "You Win!";
    if (gameOver) gameState = "You Lose!";

    console.log(this.state.answer)
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img alt={altMsg} src={this.props.images[this.state.nWrong]} />
        <p>Number Wrong: {this.state.nWrong}</p>
        <p className='Hangman-word'>
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>        
        <p className='Hangman-btns'>{gameState}</p>
        <button id='restartBtn' onClick={this.restartBtn}>Restart</button>
      </div>
    );
  }
}

export default Hangman;

