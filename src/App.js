import React, {useState} from 'react'
import { Welcome } from './components/welcome';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false)

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
