import './App.css';

// Appbar
import Appbar from './components/Appbar';

// Pages
import Home from './components/Home';
import Dashboard from './components/Dashboard';

// ES6 style
import { meterify } from "meterify";
const Web3 = require("web3"); // Recommend using require() instead of import here

const web3 = meterify(new Web3(), "http://localhost:8669");

web3.eth.getBlock("latest").then(res => console.log(res));


function App() {
  return (
    <div className="App">
      <Appbar />
    </div>
  );
}

export default App;
