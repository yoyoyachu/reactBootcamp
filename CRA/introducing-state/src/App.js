import './App.css';
import Game from './Game';
import Randomnum from './Randomnum';

function App() {
  return (
    <div className="App">
      <Game />
      <Randomnum maxNum={10}/>
    </div>
  );
}

export default App;
