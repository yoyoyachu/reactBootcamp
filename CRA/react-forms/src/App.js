import logo from './logo.svg';
import './App.css';
import Simpleform from './Simpleform'
import MultiForm from './MultiForm'
import ShoppingList from './ShoppingList'

function App() {
  return (
    <div className="App">
      <Simpleform />
      <MultiForm />
      <ShoppingList/>
    </div>
  );
}

export default App;
