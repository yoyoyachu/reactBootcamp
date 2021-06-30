import Click from './Click';
import './App.css';
import ClipboardEvents from './ClipboardEvents'
import KeyboardEvents from './KeyboardEvents'
import FocusEvents from './FocusEvents'
import OnMouseOver  from './OnMouseOver'

function App() {
  return (
    <div className="App">
      <Click />
      <ClipboardEvents />
      <KeyboardEvents />
      <FocusEvents/>
      <OnMouseOver />
    </div>
  );
}

export default App;
