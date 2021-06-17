import './App.css';
import Game from './Game';
import Randomnum from './Randomnum';
import Clickevent from './Clickevent';
import Toggleclick from './Toggleclick'

function App() {
  return (
    <div className="App">
      <Clickevent />
      {/* <Game /> */}
      {/* <Randomnum maxNum={10}/> */}
      {/* toggle button */}
      <Toggleclick />
    </div>
  );
}

export default App;
