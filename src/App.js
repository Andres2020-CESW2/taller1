import './App.css';
import React , {useState} from 'react'
import Header from '../src/components/Header'
import Register from './components/Register';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/App.css'

function App() {
  const [listState, setListState] = useState([]);
  const [calculation, setCalculation] = useState(0);
  //usefect que cada vez que se actualice haga el calculo
  return (
    <div className="App">
      <Header RegistrosObj={listState} calculation={calculation} setCalculation={setCalculation}/>
      <Register listState={listState} setListState={setListState} calculation={calculation}  />

    </div>
  );
}

export default App;
