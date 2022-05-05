import React, { useContext } from 'react'
import { DataContext } from './context/DataContext';
import { Welcome } from './components/welcome';
import './App.css';

function App() {

  const {isLogin} = useContext(DataContext)

  return (
    <div className="App">
      {
        isLogin
          ? <h1>Hola de nuevo</h1>
          : <Welcome/>
      }
    </div>
  );
}

export default App;
