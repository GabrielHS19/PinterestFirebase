import React from 'react';
import Login from './comps/Login';
import Logo from './comps/logo.png';
import "./index.css"


function App() {

  return (
    <div className="App">
      
      <img class="foto2" src={Logo} alt="imagen 2">
        </img>
      <Login />

    </div>
  );
}

export default App;
