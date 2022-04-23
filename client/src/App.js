import logo from './logo.svg';
import './App.css';
import Coffeeshops from './components/coffeeshops/Coffeeshops';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Coffeeshops />

      </header>
    </div>
  );
}

export default App;
